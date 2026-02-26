import stories from '../data/storiesData';
import StoryPageLayout from '../components/StoryPage';

export default function Story1() {
    const story = stories.find((s) => s.id === 1);
    const prevStory = null;
    const nextStory = stories.find((s) => s.id === 2) || null;

    return <StoryPageLayout story={story} prevStory={prevStory} nextStory={nextStory} />;
}
