import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import stories from '../data/storiesData';

// Helper to convert series name to a URL-friendly slug
const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export default function SeriesDetails() {
    const { seriesId } = useParams();

    // Group stories by series to find the matching one
    const groupedStories = stories.reduce((acc, story) => {
        const seriesName = story.series || 'Standalone Stories';
        if (seriesName !== 'Standalone Stories') {
            const slug = generateSlug(seriesName);
            if (!acc[slug]) {
                acc[slug] = {
                    stories: [],
                    name: seriesName,
                    slug: slug
                };
            }
            acc[slug].stories.push(story);
        }
        return acc;
    }, {});

    const seriesData = groupedStories[seriesId];

    if (!seriesData) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-20 text-center animate-fade-in">
                <h1 className="font-heading text-3xl font-bold text-ink mb-4">Series Not Found</h1>
                <p className="text-ink-light mb-8">We couldn't track down the guide you're looking for.</p>
                <Link to="/series" className="inline-flex items-center text-accent hover:text-ink transition-colors font-medium">
                    <ArrowLeft size={16} className="mr-2" /> Back to all Series
                </Link>
            </main>
        );
    }

    const { name, stories: seriesStories } = seriesData;
    const count = seriesStories.length;
    // We use the excerpt from the first story as a general preview if no global series description exists
    const seriesDescription = seriesStories[0]?.excerpt || "Discover the complete journey chapter by chapter.";

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 animate-fade-in relative">

            {/* Back Link */}
            <div className="mb-8">
                <Link to="/series" className="inline-flex items-center text-sm font-medium text-ink-muted hover:text-ink transition-colors group">
                    <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to all Series
                </Link>
            </div>

            {/* Top Series Info Card */}
            <section className="mb-16 relative rounded-2xl border border-warm-200/40 bg-warm-50/30 dark:bg-warm-100/10 p-8 md:p-10 overflow-hidden">
                {/* Background Icon */}
                <div className="absolute -right-8 -bottom-12 text-warm-200/20 dark:text-warm-700/20 pointer-events-none">
                    <BookOpen size={280} strokeWidth={1} />
                </div>

                <div className="relative z-10 w-full md:w-4/5">
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold tracking-wider text-ink-muted uppercase">
                            Series Overview
                        </span>
                        <span className="px-3 py-1 rounded-full bg-warm-200/50 dark:bg-warm-700/50 text-xs font-bold tracking-wider text-ink-light">
                            {count} {count === 1 ? 'CHAPTER' : 'CHAPTERS'}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-6">
                        {name}
                    </h1>

                    {/* Description */}
                    <p className="text-ink-light text-lg md:text-xl leading-relaxed max-w-2xl">
                        It follows Munmun and Mr. Nobody two strangers who met, connected, loved, struggled, and eventually became strangers again.

                        Told by Mr. Nobody himself, this is a story of love, anxiety, suspense, and heartbreak—the kind that stays long after it ends.
                    </p>
                </div>
            </section>

            {/* Episodes section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-ink inline-flex flex-col items-center">
                        <span>Episodes in this Series</span>
                        <div className="h-1 w-12 bg-mood-hopeful mt-3 rounded-full"></div>
                    </h2>
                </div>

                {/* Vertical Timeline Layout */}
                <div className="relative max-w-3xl mx-auto">
                    {/* The continuous vertical line */}
                    <div className="absolute left-6 md:left-8 top-8 bottom-0 w-px bg-warm-200/60 dark:bg-warm-700/60 hidden sm:block"></div>

                    <div className="space-y-12">
                        {seriesStories.map((story, idx) => {
                            const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            });

                            // Rough estimate for read time (words / 200 = minutes)
                            const wordCount = story.content ? story.content.split(/\s+/).length : 500;
                            const readTime = Math.max(1, Math.ceil(wordCount / 200));

                            // Abstract image placeholder since we don't have actual thumbnails
                            // Generates a slightly different gradient rotation based on index
                            const gradientRotation = (idx * 45) + 135;
                            const placeholderStyle = {
                                background: `linear-gradient(${gradientRotation}deg, var(--color-mood-sad), var(--color-mood-nostalgic), var(--color-warm-800))`
                            };

                            return (
                                <div key={story.id} className="relative flex flex-col sm:flex-row gap-6 sm:gap-14 group">

                                    {/* Timeline Circle */}
                                    <div className="hidden sm:flex absolute left-6 md:left-8 top-[3.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border-2 border-mood-hopeful bg-transparent z-10 text-sm font-bold text-ink shadow-sm transition-colors group-hover:border-accent">
                                        <span className="text-warm-800 dark:text-cream">{idx + 1}</span>
                                    </div>

                                    {/* Timeline Circle Mobile */}
                                    <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full border border-mood-hopeful bg-transparent text-xs font-bold text-ink mb-[-1rem] z-10 relative left-4">
                                        <span className="text-warm-800 dark:text-cream">{idx + 1}</span>
                                    </div>

                                    {/* Episode Card Content */}
                                    <Link to={`/story/${story.id}`} className="flex-1 ml-0 sm:ml-16 outline-none block">
                                        <article className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-warm-200/60 bg-warm-50/20 dark:bg-warm-100/5 transition-all duration-300 group-hover:bg-warm-50/50 dark:group-hover:bg-warm-100/10 group-hover:border-warm-300 group-hover:shadow-sm">

                                            {/* Text Content Only */}
                                            <div className="flex-1 py-1 flex flex-col">
                                                <span className="text-xs tracking-widest text-mood-hopeful uppercase mb-3 font-semibold">
                                                    Chapter {idx + 1}
                                                </span>

                                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-accent transition-colors duration-200 leading-tight">
                                                    {story.title}
                                                </h3>

                                                <p className="text-ink-light text-base line-clamp-2 md:line-clamp-3 mb-6 font-body">
                                                    {story.excerpt}
                                                </p>

                                                {/* Meta Info */}
                                                <div className="flex items-center gap-5 text-sm text-ink-muted mt-auto pt-2">
                                                    <div className="flex items-center gap-2">
                                                        <CalendarDays size={16} className="text-ink-muted/70" />
                                                        <time>{formattedDate}</time>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock size={16} className="text-ink-muted/70" />
                                                        <span>{readTime} min read</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </article>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </main>
    );
}
