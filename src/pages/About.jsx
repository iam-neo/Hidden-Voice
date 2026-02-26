export default function About() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-12 md:py-16 animate-fade-in">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
                About Hidden Voice
            </h1>

            <div className="space-y-6 text-ink-light leading-relaxed text-lg">
                <p>
                    <strong className="text-ink">Hidden Voice</strong> is a quiet corner of the
                    internet — a place where stories exist without the weight of identity.
                    No profile pictures, no follower counts, no judgment. Just words,
                    breathing freely.
                </p>

                <p>
                    Every story you read here was written by someone who chose to share
                    a piece of their truth without attaching their name to it. Some stories
                    are fiction woven from real feelings. Others are memories dressed in
                    metaphor. Many are something in between — the kind of honesty that
                    only anonymity can unlock.
                </p>

                <div className="my-10 p-8 rounded-2xl bg-accent/5 border border-accent/10">
                    <blockquote className="font-heading text-xl md:text-2xl text-ink font-medium leading-relaxed text-center italic">
                        "We write not because someone is listening, but because
                        silence has a weight — and words, even unheard ones,
                        make us lighter."
                    </blockquote>
                </div>

                <h2 className="font-heading text-xl font-semibold text-ink mt-10 mb-4">
                    Why Anonymous?
                </h2>

                <p>
                    Because the most honest things we have to say often live behind the
                    wall of who we are. Anonymity removes the performance. It strips away
                    the need to be clever, impressive, or cautious. What remains is the
                    raw, beautiful mess of being human.
                </p>

                <p>
                    Here, a CEO and a college student share the same silence. A
                    grandmother's regret sits next to a teenager's first heartbreak.
                    Every voice is equal because every voice is hidden.
                </p>

                <h2 className="font-heading text-xl font-semibold text-ink mt-10 mb-4">
                    The Experience
                </h2>

                <p>
                    Hidden Voice is intentionally simple. No comments. No likes. No
                    algorithms deciding what you should feel. Just a calm, quiet
                    reading space where you can sit with someone else's words and
                    let them resonate — or not. Both are valid.
                </p>

                <p>
                    This is not social media. This is a library of whispered truths.
                </p>

                <div className="mt-10 pt-8 border-t border-warm-200/60">
                    <p className="font-heading text-sm text-ink-muted text-center">
                        Built with care. Designed for peace. Made for the words we
                        carry but rarely share.
                    </p>
                </div>
            </div>
        </main>
    );
}
