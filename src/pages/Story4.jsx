import stories from '../data/storiesData';
import StoryPageLayout from '../components/StoryPage';

export default function Story4() {
    const story = stories.find((s) => s.id === 4);

    // Find stories in the same series
    const seriesStories = story.series
        ? stories.filter(s => s.series === story.series)
        : stories;

    const currentIndex = seriesStories.findIndex(s => s.id === story.id);

    const prevStory = currentIndex > 0 ? seriesStories[currentIndex - 1] : null;
    const nextStory = currentIndex < seriesStories.length - 1 ? seriesStories[currentIndex + 1] : null;

    return <StoryPageLayout story={story} prevStory={prevStory} nextStory={nextStory} />;
}
