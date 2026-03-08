import { useState, useEffect } from 'react';

export default function TypewriterText({
    text = '',
    speed = 80,
    className = '',
    as: Tag = 'span',
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Respect reduced motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setDisplayedText(text);
            setShowCursor(false);
            return;
        }

        let index = 0;
        setDisplayedText('');
        setShowCursor(true);

        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                // Hide cursor after a pause
                setTimeout(() => setShowCursor(false), 1500);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <Tag className={className}>
            {displayedText}
            {showCursor && <span className="typewriter-cursor" aria-hidden="true" />}
        </Tag>
    );
}
