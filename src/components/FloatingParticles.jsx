import { useEffect, useRef } from 'react';

export default function FloatingParticles({ count = 30 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Respect reduced motion preference
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const createParticles = () => {
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                size: Math.random() * 2.5 + 0.8,
                speedY: -(Math.random() * 0.3 + 0.1),
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.4 + 0.1,
                pulse: Math.random() * Math.PI * 2,
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            particles.forEach((p) => {
                p.y += p.speedY;
                p.x += p.speedX;
                p.pulse += 0.02;

                const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

                // Reset particle when it goes off top
                if (p.y < -10) {
                    p.y = canvas.offsetHeight + 10;
                    p.x = Math.random() * canvas.offsetWidth;
                }
                // Wrap horizontally
                if (p.x < -10) p.x = canvas.offsetWidth + 10;
                if (p.x > canvas.offsetWidth + 10) p.x = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 123, 168, ${currentOpacity})`;
                ctx.fill();

                // Soft glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 123, 168, ${currentOpacity * 0.15})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, [count]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.7 }}
            aria-hidden="true"
        />
    );
}
