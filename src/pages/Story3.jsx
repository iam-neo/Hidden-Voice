import stories from '../data/storiesData';
import StoryPageLayout from '../components/StoryPage';

export default function Story3() {
    const story = stories.find((s) => s.id === 3);
    const prevStory = stories.find((s) => s.id === 2) || null;
    const nextStory = null;

    return <StoryPageLayout story={story} prevStory={prevStory} nextStory={nextStory} />;
}
