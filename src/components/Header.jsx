import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggle } = useDarkMode();
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/series', label: 'Series' },
        { to: '/about', label: 'About' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-warm-200/50 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-300">
                        <svg
                            viewBox="0 0 24 24"
                            className="w-4.5 h-4.5 text-accent"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                            <path d="M10 2c1 .5 2 2 2 5" />
                        </svg>
                    </div>
                    <span className="font-heading text-xl font-semibold tracking-tight text-ink">
                        Hidden Voice
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`font-heading text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.to)
                                ? 'text-accent'
                                : 'text-ink-muted hover:text-ink'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dark mode toggle */}
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full hover:bg-warm-100 transition-colors duration-200"
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile menu button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full hover:bg-warm-100 transition-colors duration-200"
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-lg hover:bg-warm-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            {menuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile nav dropdown */}
            {menuOpen && (
                <nav className="md:hidden border-t border-warm-200/50 bg-cream/95 backdrop-blur-md animate-fade-in">
                    <div className="px-6 py-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`font-heading text-sm font-medium py-2 transition-colors duration-200 ${isActive(link.to)
                                    ? 'text-accent'
                                    : 'text-ink-muted hover:text-ink'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
