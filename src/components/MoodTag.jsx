const moodConfig = {
    happy: {
        bg: 'bg-mood-happy/15',
        text: 'text-mood-happy',
        dot: 'bg-mood-happy',
        label: 'Happy',
    },
    sad: {
        bg: 'bg-mood-sad/15',
        text: 'text-mood-sad',
        dot: 'bg-mood-sad',
        label: 'Sad',
    },
    reflective: {
        bg: 'bg-mood-reflective/15',
        text: 'text-mood-reflective',
        dot: 'bg-mood-reflective',
        label: 'Reflective',
    },
    hopeful: {
        bg: 'bg-mood-hopeful/15',
        text: 'text-mood-hopeful',
        dot: 'bg-mood-hopeful',
        label: 'Hopeful',
    },
    nostalgic: {
        bg: 'bg-mood-nostalgic/15',
        text: 'text-mood-nostalgic',
        dot: 'bg-mood-nostalgic',
        label: 'Nostalgic',
    },
    anxious: {
        bg: 'bg-mood-anxious/15',
        text: 'text-mood-anxious',
        dot: 'bg-mood-anxious',
        label: 'Anxious',
    },
};

export default function MoodTag({ mood }) {
    const config = moodConfig[mood] || moodConfig.reflective;

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-medium tracking-wide ${config.bg} ${config.text}`}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    );
}
