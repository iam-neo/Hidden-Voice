import { Link } from 'react-router-dom';
import MoodTag from './MoodTag';

export default function StoryCard({ story, index = 0, featured = false }) {
    const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const excerpt =
        story.excerpt.length > 150
            ? story.excerpt.substring(0, 150) + '…'
            : story.excerpt;

    if (featured) {
        return (
            <Link
                to={`/story/${story.id}`}
                className="group block animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <article className="relative overflow-hidden rounded-2xl bg-accent/5 border border-accent/10 p-8 md:p-10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                    {/* Story of the Day badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-heading font-semibold tracking-wide">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Story of the Day
                        </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                        {story.title}
                    </h2>

                    <p className="text-ink-light leading-relaxed mb-5 text-base md:text-lg">
                        {excerpt}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <MoodTag mood={story.mood} />
                        <time className="font-heading text-xs text-ink-muted tracking-wide">
                            {formattedDate}
                        </time>
                    </div>

                    {/* Read indicator */}
                    <div className="mt-5 flex items-center gap-2 text-accent font-heading text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read this story
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link
            to={`/story/${story.id}`}
            className="group block animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <article className="rounded-xl border border-warm-200/60 bg-warm-50/50 p-6 transition-all duration-300 hover:border-warm-300 hover:bg-warm-50 hover:shadow-md hover:shadow-warm-200/20">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <MoodTag mood={story.mood} />
                    <time className="font-heading text-xs text-ink-muted tracking-wide">
                        {formattedDate}
                    </time>
                </div>

                <h3 className="font-heading text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {story.title}
                </h3>

                <p className="text-ink-light text-sm leading-relaxed line-clamp-3">
                    {excerpt}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-ink-muted font-heading text-xs font-medium group-hover:text-accent transition-colors duration-300">
                    Continue reading
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </article>
        </Link>
    );
}
