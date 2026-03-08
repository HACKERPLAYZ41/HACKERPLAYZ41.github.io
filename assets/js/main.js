document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. SCROLL REVEAL
       ===================================================== */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));

    /* =====================================================
       2. NAV — scrolled shadow + active section highlight
       ===================================================== */
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]');

    // Scrolled shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }, { passive: true });

    // Active section via IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('nav-active');
                    }
                });
            }
        });
    }, { threshold: 0.35 });
    sections.forEach(s => sectionObserver.observe(s));

    /* =====================================================
       3. SMOOTH SCROLL FOR NAV LINKS
       ===================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                // Close mobile menu if open
                mobileMenu?.classList.remove('open');
                hamburger?.classList.remove('open');
            }
        });
    });

    /* =====================================================
       4. HAMBURGER MENU TOGGLE
       ===================================================== */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu?.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!hamburger?.contains(e.target) && !mobileMenu?.contains(e.target)) {
            hamburger?.classList.remove('open');
            mobileMenu?.classList.remove('open');
        }
    });

    /* =====================================================
       5. TYPED TEXT EFFECT — Hero Subtitle
       ===================================================== */
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        const phrases = [
            'Full-Stack Developer',
            'Discord Bot Builder',
            'Minecraft Enthusiast',
            'Founder of blockcode.in',
            'UI/UX Craftsman',
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 80;

        function type() {
            const current = phrases[phraseIndex];
            if (isDeleting) {
                typedEl.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 45;
            } else {
                typedEl.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 80;
            }

            if (!isDeleting && charIndex === current.length) {
                isDeleting = true;
                typingSpeed = 1600; // pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400; // pause before next
            }
            setTimeout(type, typingSpeed);
        }
        setTimeout(type, 1200);
    }

    /* =====================================================
       6. GSAP 3D CARD SWAP — Hero Section
       ===================================================== */
    const swapCards = document.querySelectorAll('.swap-card');
    if (swapCards.length > 0 && window.gsap) {
        let currentIndex = swapCards.length - 1;

        // Idle float
        swapCards.forEach((card, i) => {
            gsap.to(card, {
                y: "random(-10, 10)", x: "random(-5, 5)", rotation: "random(-2, 2)",
                duration: "random(2, 4)", repeat: -1, yoyo: true,
                ease: "sine.inOut", delay: i * 0.5
            });
        });

        function swap() {
            const isMobile = window.innerWidth <= 768;
            const xOut = isMobile ? 100 : 200;
            const yOut = isMobile ? -30 : -60;
            const xIn = isMobile ? -50 : -100;
            const yIn = isMobile ? 15 : 30;

            const topCard = swapCards[currentIndex];
            gsap.killTweensOf(topCard, "y,x,rotation");
            gsap.to(topCard, {
                x: xOut, y: yOut, rotationZ: 20, rotationY: -30,
                opacity: 0, scale: 0.8, duration: 0.8, ease: "power2.inOut",
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
                            x: 0, y: 0, rotationZ: (currentIndex % 2 === 0 ? -5 : 5),
                            rotationY: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out",
                            onComplete: () => {
                                gsap.to(topCard, {
                                    y: "random(-10, 10)", x: "random(-5, 5)", rotation: "random(-2, 2)",
                                    duration: "random(2, 4)", repeat: -1, yoyo: true, ease: "sine.inOut"
                                });
                            }
                        }
                    );
                    currentIndex = (currentIndex - 1 + swapCards.length) % swapCards.length;
                }
            });
        }

        swapCards.forEach((card, i) => {
            gsap.set(card, { zIndex: i, rotationZ: (i % 2 === 0 ? -5 : 5) });
        });

        const autoSwap = () => { swap(); setTimeout(autoSwap, 4000); };
        setTimeout(autoSwap, 3000);
    }

    /* =====================================================
       7. BENTO CARDS — OLIVE GLOW ON MOUSEMOVE
       ===================================================== */
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
            card.style.setProperty('--glow-intensity', '1');
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--glow-intensity', '0');
        });
    });

    /* =====================================================
       8. SKILL CHIP STAGGER ENTRANCE
       ===================================================== */
    if (window.gsap) {
        const chips = document.querySelectorAll('.skill-chip');
        if (chips.length) {
            gsap.from(chips, {
                opacity: 0, y: 20, scale: 0.9,
                stagger: 0.04, duration: 0.5, ease: "back.out(1.5)",
                scrollTrigger: { trigger: '.skills-list', start: 'top 80%' }
            });
        }
    }
});
