import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MoodTag from './MoodTag';

export default function StoryPage({ story, prevStory, nextStory }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [story.id]);

    const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Split content into paragraphs
    const paragraphs = story.content
        .split('\n\n')
        .filter((p) => p.trim().length > 0);

    return (
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 animate-fade-in">
            {/* Back link */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 font-heading text-sm text-ink-muted hover:text-accent transition-colors duration-200 mb-8 group"
            >
                <svg
                    className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to stories
            </Link>

            {/* Header */}
            <header className="mb-10 animate-fade-up">
                <div className="flex items-center gap-3 mb-4">
                    <MoodTag mood={story.mood} />
                    <span className="text-warm-300">·</span>
                    <time className="font-heading text-sm text-ink-muted tracking-wide">
                        {formattedDate}
                    </time>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                    {story.title}
                </h1>

                <div className="mt-6 h-px bg-warm-200/60" />
            </header>

            {/* Story content */}
            <div className="story-content animate-fade-up" style={{ animationDelay: '200ms' }}>
                {paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-ink-light">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Divider */}
            <div className="my-12 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-warm-300/50" />
                <svg className="w-4 h-4 text-warm-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="h-px w-12 bg-warm-300/50" />
            </div>

            {/* Navigation */}
            <nav className="flex items-stretch justify-between gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                {prevStory ? (
                    <Link
                        to={`/story/${prevStory.id}`}
                        className="group flex-1 p-5 rounded-xl border border-warm-200/60 hover:border-warm-300 hover:bg-warm-50/50 transition-all duration-300 text-left"
                    >
                        <span className="font-heading text-xs text-ink-muted tracking-wide flex items-center gap-1.5 mb-2">
                            <svg className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </span>
                        <span className="font-heading text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                            {prevStory.title}
                        </span>
                    </Link>
                ) : (
                    <div className="flex-1" />
                )}

                {nextStory ? (
                    <Link
                        to={`/story/${nextStory.id}`}
                        className="group flex-1 p-5 rounded-xl border border-warm-200/60 hover:border-warm-300 hover:bg-warm-50/50 transition-all duration-300 text-right"
                    >
                        <span className="font-heading text-xs text-ink-muted tracking-wide flex items-center justify-end gap-1.5 mb-2">
                            Next
                            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="font-heading text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                            {nextStory.title}
                        </span>
                    </Link>
                ) : (
                    <div className="flex-1" />
                )}
            </nav>
        </article>
    );
}
