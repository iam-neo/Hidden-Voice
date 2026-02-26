export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-10 animate-fade-in">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg font-heading text-sm font-medium text-ink-muted border border-warm-200/60 hover:border-warm-300 hover:bg-warm-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
                ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 rounded-lg font-heading text-sm font-medium transition-all duration-200 ${page === currentPage
                            ? 'bg-accent text-white shadow-md shadow-accent/20'
                            : 'text-ink-muted border border-warm-200/60 hover:border-warm-300 hover:bg-warm-50'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg font-heading text-sm font-medium text-ink-muted border border-warm-200/60 hover:border-warm-300 hover:bg-warm-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
                Next →
            </button>
        </div>
    );
}
