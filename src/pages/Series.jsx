import { Link } from 'react-router-dom';
import stories from '../data/storiesData';
import MoodTag from '../components/MoodTag';

export default function Series() {
    // Group stories by series
    const groupedStories = stories.reduce((acc, story) => {
        const seriesName = story.series || 'Standalone Stories';
        if (!acc[seriesName]) {
            acc[seriesName] = [];
        }
        acc[seriesName].push(story);
        return acc;
    }, {});

    // Ensure 'Standalone Stories' appears last
    const seriesKeys = Object.keys(groupedStories).sort((a, b) => {
        if (a === 'Standalone Stories') return 1;
        if (b === 'Standalone Stories') return -1;
        return a.localeCompare(b);
    });

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 animate-fade-in">
            <section className="mb-14">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                    Story Series
                </h1>
                <p className="text-ink-light text-lg md:text-xl leading-relaxed max-w-2xl">
                    Follow stories as they unfold chapter by chapter, or explore standalone tales.
                </p>
            </section>

            <div className="space-y-16">
                {seriesKeys.map((seriesGroup) => (
                    <section key={seriesGroup}>
                        <h2 className="font-heading text-2xl font-semibold text-ink border-b border-warm-200/60 pb-3 mb-6">
                            {seriesGroup}
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {groupedStories[seriesGroup].map((story, idx) => {
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
                                                {story.series ? `Part ${idx + 1}: ${story.title}` : story.title}
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
                ))}
            </div>
        </main>
    );
}
