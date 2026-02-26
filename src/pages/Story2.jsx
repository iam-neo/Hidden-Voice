import stories from '../data/storiesData';
import StoryPageLayout from '../components/StoryPage';

export default function Story2() {
    const story = stories.find((s) => s.id === 2);
    const prevStory = stories.find((s) => s.id === 1) || null;
    const nextStory = stories.find((s) => s.id === 3) || null;

    return <StoryPageLayout story={story} prevStory={prevStory} nextStory={nextStory} />;
}
