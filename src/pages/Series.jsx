import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import stories from '../data/storiesData';
import MoodTag from '../components/MoodTag';

// Helper to convert series name to a URL-friendly slug
const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export default function Series() {
    // Group stories by series
    const groupedStories = stories.reduce((acc, story) => {
        const seriesName = story.series || 'Standalone Stories';
        if (!acc[seriesName]) {
            acc[seriesName] = {
                stories: [],
                name: seriesName,
                slug: generateSlug(seriesName)
            };
        }
        acc[seriesName].stories.push(story);
        return acc;
    }, {});

    // For the UI, we'll only display actual series as cards initially
    const seriesKeys = Object.keys(groupedStories)
        .filter(key => key !== 'Standalone Stories')
        .sort((a, b) => a.localeCompare(b));

    const standaloneStories = groupedStories['Standalone Stories']?.stories || [];

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 animate-fade-in relative">

            {/* Header section inspired by mockup */}
            <section className="text-center mb-16">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink leading-tight mb-4 inline-flex flex-col items-center">
                    <span>Series <span className="italic font-serif font-medium text-warm-400">&</span> Guides</span>
                    <div className="h-1 w-12 bg-mood-hopeful mt-3 rounded-full"></div>
                </h1>
                <p className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-ink-light mt-6">
                    Structured reading paths. Follow these multi-part stories from start to finish to explore the complete journey.
                </p>
            </section>

            <div className="space-y-12">
                {seriesKeys.map((seriesGroup) => {
                    const group = groupedStories[seriesGroup];
                    const count = group.stories.length;
                    const previewStories = group.stories.slice(0, 3);
                    const excerpt = previewStories[0]?.excerpt || "Explore this structured guide step-by-step.";

                    return (
                        <div key={seriesGroup} className="relative group">
                            {/* Card Container */}
                            <div className="relative rounded-2xl border border-warm-200/40 bg-warm-50/30 dark:bg-warm-100/10 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-warm-300/60 dark:hover:border-warm-200/20 hover:shadow-lg">

                                {/* Background Icon */}
                                <div className="absolute -right-8 -top-8 text-warm-200/20 dark:text-warm-700/20 pointer-events-none group-hover:scale-105 transition-transform duration-500">
                                    <BookOpen size={240} strokeWidth={1.5} />
                                </div>

                                <div className="relative z-10 w-full md:w-4/5">
                                    {/* Badges */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full bg-warm-200/50 dark:bg-warm-700/50 text-xs font-bold tracking-wider text-ink-light">
                                            {count} {count === 1 ? 'CHAPTER' : 'CHAPTERS'}
                                        </span>
                                        <span className="text-xs font-bold tracking-wider text-ink-muted uppercase">
                                            Structured Guide
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">
                                        {seriesGroup}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-ink-light text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                                        {excerpt}
                                    </p>

                                    {/* Included in this series list */}
                                    <div className="border-t border-warm-200/50 dark:border-warm-700/50 pt-6">
                                        <p className="text-sm font-medium text-ink-muted mb-4">
                                            Included in this series:
                                        </p>
                                        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 gap-y-2">
                                            {previewStories.map((story, idx) => (
                                                <li key={story.id} className="text-sm text-ink-light truncate flex-1">
                                                    <span className="text-ink-muted mr-1">{idx + 1}.</span> {story.title}
                                                </li>
                                            ))}
                                            {count > 3 && (
                                                <li className="text-sm text-ink-muted italic">
                                                    + {count - 3} more
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Link Overlay */}
                                    <Link
                                        to={`/series/${group.slug}`}
                                        className="absolute inset-0 z-20 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                                        aria-label={`View ${seriesGroup} series`}
                                    />
                                </div>

                                {/* Floating Arrow Button */}
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-warm-200/50 dark:bg-warm-700/50 text-ink">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Standalone Stories section (optional, keeping it clean below series guides) */}
                {standaloneStories.length > 0 && (
                    <section className="mt-20">
                        <h2 className="font-heading text-2xl font-semibold text-ink border-b border-warm-200/60 pb-3 mb-6">
                            Standalone Stories
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {standaloneStories.map((story) => {
                                const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                });

                                return (
                                    <Link
                                        key={story.id}
                                        to={`/story/${story.id}`}
                                        className="group block"
                                    >
                                        <article className="h-full rounded-xl border border-warm-200/60 bg-warm-50/50 p-5 transition-all duration-300 hover:border-warm-300 hover:bg-warm-50 hover:shadow-sm">
                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <MoodTag mood={story.mood} />
                                                <time className="font-heading text-xs text-ink-muted">
                                                    {formattedDate}
                                                </time>
                                            </div>
                                            <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                                                {story.title}
                                            </h3>
                                            <p className="mt-2 text-ink-light text-sm line-clamp-2">
                                                {story.excerpt}
                                            </p>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
