/* BrillSign V3 Intro Animation Engine */
(function() {
    window.addEventListener('load', () => {
        const stage = document.getElementById('intro-stage');
        if (!stage) return;

        const canvas = document.getElementById('intro-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = stage.offsetWidth;
        canvas.height = stage.offsetHeight;

        const W = canvas.width, H = canvas.height, CX = W / 2, CY = H / 2, t0 = performance.now();

        class Dot {
            constructor() { this.spawn(); }
            spawn() {
                this.x = Math.random() * W; this.y = Math.random() * H;
                this.vx = (Math.random() - 0.5) * 0.35; this.vy = (Math.random() - 0.5) * 0.35;
                this.r = 0.6 + Math.random(); this.base = 0.15 + Math.random() * 0.3; this.a = 0;
                this.life = 200 + Math.random() * 200; this.age = 0;
            }
            update(t, phase) {
                this.age++;
                if (phase === 'converge') {
                    const dx = CX - this.x, dy = CY - this.y, d = Math.hypot(dx, dy) || 1;
                    const f = Math.min(0.8, (t - 3.8) * 0.25);
                    this.vx += (dx / d) * f * 0.07; this.vy += (dy / d) * f * 0.07;
                    this.vx *= 0.93; this.vy *= 0.93;
                }
                if (phase === 'done') this.a *= 0.98;
                else {
                    const p = this.age / this.life;
                    this.a = p < 0.15 ? p / 0.15 * this.base : p > 0.85 ? (1 - p) / 0.15 * this.base : this.base;
                }
                this.x += this.vx; this.y += this.vy;
                if (this.age > this.life && phase !== 'done') this.spawn();
            }
            draw() {
                if (this.a < 0.01) return;
                ctx.fillStyle = `rgba(120,200,255,${this.a})`;
                ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill();
            }
        }

        class Stream {
            constructor() { this.init(); }
            init() {
                this.x = -150; this.y = Math.random() * H; this.len = 60 + Math.random() * 120;
                this.spd = 0.8 + Math.random(); this.a = 0; this.target = 0.15 + Math.random() * 0.15;
            }
            update(phase) {
                this.x += this.spd;
                if (phase === 'converge' || phase === 'done') this.a *= 0.94;
                else this.a = Math.min(this.target, this.a + 0.02);
                if (this.x > W + 150 && phase !== 'done') this.init();
            }
            draw() {
                if (this.a < 0.01) return;
                const g = ctx.createLinearGradient(this.x - this.len, this.y, this.x, this.y);
                g.addColorStop(0, 'rgba(0,180,255,0)'); g.addColorStop(0.5, `rgba(0,180,255,${this.a})`); g.addColorStop(1, 'rgba(255,255,255,0)');
                ctx.strokeStyle = g; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(this.x - this.len, this.y); ctx.lineTo(this.x, this.y); ctx.stroke();
            }
        }

        const dots = Array.from({ length: 75 }, () => new Dot());
        const streams = Array.from({ length: 10 }, () => new Stream());

        function animate() {
            const t = (performance.now() - t0) / 1000;
            const phase = t < 3.8 ? 'drift' : t < 5.5 ? 'converge' : 'done';
            ctx.clearRect(0, 0, W, H);
            streams.forEach(s => { s.update(phase); s.draw(); });
            dots.forEach(d => { d.update(t, phase); d.draw(); });
            if (t < 9) requestAnimationFrame(animate);
        }
        animate();

        // ── Dynamic Path Lengths ──
        const docLine = document.getElementById('intro-docBody');
        if (docLine && docLine.getTotalLength) {
            const len = Math.ceil(docLine.getTotalLength());
            docLine.style.strokeDasharray = len;
            docLine.style.strokeDashoffset = len;
            docLine.style.opacity = 1;
            void docLine.getBoundingClientRect();
            docLine.style.animation = 'drawPath 1.3s cubic-bezier(.4,0,.2,1) 0.8s forwards';
        }

        const foldLine = document.getElementById('intro-docFold');
        if (foldLine && foldLine.getTotalLength) {
            const len = Math.ceil(foldLine.getTotalLength());
            foldLine.style.strokeDasharray = len;
            foldLine.style.strokeDashoffset = len;
            foldLine.style.opacity = 1;
            void foldLine.getBoundingClientRect();
            foldLine.style.animation = 'drawPath 0.4s ease 1.8s forwards';
        }

        // ── Detail Lines ──
        const dtLines = document.querySelectorAll('.intro-dtl');
        dtLines.forEach((line, i) => {
            const len = line.getAttribute('x2') - line.getAttribute('x1');
            line.style.strokeDasharray = len;
            line.style.strokeDashoffset = len;
            line.style.animation = `drawPath 0.4s ease ${2.0 + (i * 0.15)}s forwards`;
        });

        // ── Signature Reveal ──
        const rect = document.getElementById('intro-sigRect');
        setTimeout(() => {
            const DUR = 1100, TARGET = 200, start = performance.now();
            (function draw() {
                const p = Math.min(1, (performance.now() - start) / DUR);
                rect.setAttribute('width', (1 - Math.pow(1 - p, 3)) * TARGET);
                if (p < 1) requestAnimationFrame(draw);
            })();
        }, 2750);

        // ── Transition to Website ──
        setTimeout(() => {
            const overlay = document.getElementById('intro-overlay');
            if (overlay) {
                overlay.classList.add('fade-out');
                // Remove from DOM after transition
                setTimeout(() => { overlay.remove(); }, 1000);
            }
        }, 8200); // Intro lasts ~8.2s including final delay
    });
})();
