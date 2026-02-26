export default function Footer() {
    return (
        <footer className="border-t border-warm-200/50 bg-cream transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center">
                <p className="font-heading text-sm text-ink-muted">
                    Every voice matters, even the hidden ones.
                </p>
                <p className="font-heading text-xs text-ink-muted/60 mt-2">
                    © {new Date().getFullYear()} Hidden Voice — A space for anonymous stories.
                </p>
            </div>
        </footer>
    );
}
