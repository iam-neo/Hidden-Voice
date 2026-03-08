import { useState, useEffect } from 'react';

const quotes = [
    "Every voice matters, even the hidden ones.",
    "We write not because someone is listening, but because silence has a weight.",
    "Words, even unheard ones, make us lighter.",
    "Some stories only exist in the spaces between silence.",
    "The most honest things live behind the wall of who we are.",
    "A library of whispered truths, waiting to be found.",
];

export default function Footer() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <footer className="border-t border-warm-200/50 bg-cream transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center">
                <p className="font-heading text-sm text-ink-muted animate-fade-in italic">
                    "{quote}"
                </p>
                <p className="font-heading text-xs text-ink-muted/60 mt-3">
                    © {new Date().getFullYear()} Hidden Voice — A space for anonymous stories.
                </p>
            </div>
        </footer>
    );
}
