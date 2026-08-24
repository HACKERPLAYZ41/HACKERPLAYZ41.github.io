import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTyped } from '../hooks/useTyped';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const typedText = useTyped([
        'Full-Stack Developer',
        'Discord Bot Builder',
        'Minecraft Enthusiast',
        'Founder of blockcode.in',
        'UI/UX Craftsman',
    ], 80, 45, 1600);

    useEffect(() => {
        if (!containerRef.current) return;

        const swapCards = gsap.utils.toArray<HTMLElement>('.swap-card');
        if (swapCards.length === 0) return;

        let currentIndex = swapCards.length - 1;

        let ctx = gsap.context(() => {
            // Idle float
            swapCards.forEach((card, i) => {
                gsap.to(card, {
                    y: "random(-10, 10)", 
                    x: "random(-5, 5)", 
                    rotation: "random(-2, 2)",
                    duration: "random(2, 4)", 
                    repeat: -1, 
                    yoyo: true,
                    ease: "sine.inOut", 
                    delay: i * 0.5
                });
            });

            const swap = () => {
                const isMobile = window.innerWidth <= 768;
                const xOut = isMobile ? 100 : 200;
                const yOut = isMobile ? -30 : -60;
                const xIn = isMobile ? -50 : -100;
                const yIn = isMobile ? 15 : 30;

                const topCard = swapCards[currentIndex];
                gsap.killTweensOf(topCard, "y,x,rotation");
                
                gsap.to(topCard, {
                    x: xOut, 
                    y: yOut, 
                    rotationZ: 20, 
                    rotationY: -30,
                    opacity: 0, 
                    scale: 0.8, 
                    duration: 0.8, 
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(topCard, { zIndex: 0 });
                        swapCards.forEach((card, i) => {
                            if (i !== currentIndex) {
                                const z = parseInt(window.getComputedStyle(card).zIndex) || 0;
                                gsap.set(card, { zIndex: z + 1 });
                            }
                        });

                        gsap.fromTo(topCard,
                            { x: xIn, y: yIn, rotationZ: -10, rotationY: 10, opacity: 0, scale: 0.9 },
                            {
                                x: 0, 
                                y: 0, 
                                rotationZ: (currentIndex % 2 === 0 ? -5 : 5),
                                rotationY: 0, 
                                opacity: 1, 
                                scale: 1, 
                                duration: 0.8, 
                                ease: "power2.out",
                                onComplete: () => {
                                    gsap.to(topCard, {
                                        y: "random(-10, 10)", 
                                        x: "random(-5, 5)", 
                                        rotation: "random(-2, 2)",
                                        duration: "random(2, 4)", 
                                        repeat: -1, 
                                        yoyo: true, 
                                        ease: "sine.inOut"
                                    });
                                }
                            }
                        );
                        currentIndex = (currentIndex - 1 + swapCards.length) % swapCards.length;
                    }
                });
            };

            // Setup initial zIndex and rotation
            swapCards.forEach((card, i) => {
                gsap.set(card, { 
                    zIndex: i, 
                    rotationZ: (i % 2 === 0 ? -5 : 5),
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    opacity: 1,
                    scale: 1
                });
            });

            const interval = setInterval(swap, 4000);
            return () => clearInterval(interval);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative overflow-hidden py-20 lg:py-28" id="home">
            {/* Background blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[50%] bg-secondary/10 blur-[120px] rounded-full -z-10 animate-float" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Col */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-7 z-10"
                >
                    <div>
                        <h2 className="text-primary font-black text-6xl lg:text-8xl tracking-tighter leading-none mb-4">
                            Hello<span className="text-text-main">.</span>
                        </h2>
                        <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 px-5 py-2.5 rounded-2xl w-fit mb-4">
                            <span className="text-2xl animate-bounce-slow">👋</span>
                            <span className="text-sm font-black uppercase tracking-widest text-primary">I'm Utkarsh Halwai</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-text-main mt-2">
                            Crafting <span className="text-primary italic">Premium</span><br />
                            Digital Solutions.
                        </h1>
                        <p className="text-lg text-text-main/70 min-h-[1.75em] leading-relaxed">
                            <span className="font-bold text-primary">{typedText}</span>
                            <span className="w-[2px] h-[1.1em] bg-primary ml-1 inline-block animate-pulse align-middle" />
                        </p>
                        <p className="text-base text-text-main/60 max-w-lg leading-relaxed">
                            Founder of <a href="https://blockcode.in" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">blockcode.in</a> — I design and engineer everything from Discord bots and Minecraft hosting to high-end full-stack web apps.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <Link to="/#projects" className="bg-primary text-background px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-all flex items-center gap-2 shadow-xl shadow-primary/25 active:scale-95">
                            Explore Projects
                            <span className="material-symbols-outlined text-[1.2rem]">rocket_launch</span>
                        </Link>
                        <Link to="/#contact" className="bg-white border-2 border-primary/15 text-primary px-8 py-4 rounded-xl font-bold hover:border-primary/40 hover:bg-background-alt transition-all active:scale-95">
                            Let's Talk
                        </Link>
                    </div>
                </motion.div>

                {/* Right Col: Card Swap */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[520px] flex items-center justify-center"
                    ref={containerRef}
                >
                    <div className="relative w-full max-w-sm h-full">
                        {[
                            { src: '/assets/img/projects/modern_dashboard.png', alt: 'Modern SaaS Dashboard' },
                            { src: '/assets/img/projects/creative_agency.png', alt: 'Creative Agency Landing' },
                            { src: '/assets/img/projects/ecommerce_lux.png', alt: 'Luxury E-commerce Store' },
                        ].map((card, idx) => (
                            <div key={idx} className="swap-card absolute inset-0 rounded-3xl overflow-hidden border border-primary/10 bg-white shadow-2xl">
                                <img src={card.src} className="w-full h-full object-cover" alt={card.alt} />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
