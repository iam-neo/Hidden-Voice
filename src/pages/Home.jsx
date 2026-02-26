import { useState } from 'react';
import stories from '../data/storiesData';
import StoryCard from '../components/StoryCard';
import Pagination from '../components/Pagination';

const STORIES_PER_PAGE = 6;

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    // Find Story of the Day
    const storyOfTheDay = stories.find((s) => s.storyOfTheDay) || stories[0];
    const otherStories = stories.filter((s) => s.id !== storyOfTheDay.id);

    // Pagination
    const totalPages = Math.ceil(otherStories.length / STORIES_PER_PAGE);
    const startIdx = (currentPage - 1) * STORIES_PER_PAGE;
    const paginatedStories = otherStories.slice(
        startIdx,
        startIdx + STORIES_PER_PAGE
    );

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            {/* Hero section */}
            <section className="mb-14 animate-fade-in">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                    Hidden Voice
                </h1>
                <p className="text-ink-light text-lg md:text-xl leading-relaxed max-w-2xl">
                    Anonymous stories from unnamed hearts. No names, no faces — just raw,
                    honest words that deserve to be heard.
                </p>
            </section>

            {/* Story of the Day */}
            <section className="mb-14">
                <h2 className="font-heading text-sm font-semibold text-ink-muted tracking-widest uppercase mb-5 animate-fade-in">
                    ✦ Story of the Day
                </h2>
                <StoryCard story={storyOfTheDay} featured index={0} />
            </section>

            {/* All Stories */}
            <section>
                <h2 className="font-heading text-sm font-semibold text-ink-muted tracking-widest uppercase mb-5 animate-fade-in">
                    All Stories
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                    {paginatedStories.map((story, idx) => (
                        <StoryCard key={story.id} story={story} index={idx + 1} />
                    ))}
                </div>

                {paginatedStories.length === 0 && (
                    <p className="text-ink-muted text-center py-12 font-heading">
                        No more stories yet. Check back soon.
                    </p>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </section>
        </main>
    );
}
