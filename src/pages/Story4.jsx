import stories from '../data/storiesData';
import StoryPageLayout from '../components/StoryPage';

export default function Story4() {
    const story = stories.find((s) => s.id === 4);
    const prevStory = stories.find((s) => s.id === 3) || null;
    const nextStory = null;

    return <StoryPageLayout story={story} prevStory={prevStory} nextStory={nextStory} />;
}
