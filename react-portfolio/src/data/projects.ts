export interface Project {
    id: string;
    title: string;
    description: string;
    overview?: string;
    img?: string;
    gradient?: string;
    categories: string[];
    tag?: string;
    tech: string[];
    link?: string;
    liveLink?: string;
    github?: string;
    featured?: boolean;
    isPrivate?: boolean;
    icon?: string;
    features?: string[];
}

export const projects: Project[] = [
    {
        id: 'blockcode',
        title: 'Blockcode.in',
        description: 'Flagship hosting platform for Discord bots & Minecraft servers — serving 500+ clients with 99.9% uptime SLA.',
        overview: 'Founder and lead developer of blockcode.in. This platform provides developers and gamers with high-performance hosting solutions. It features a custom management dashboard, automated provisioning, and real-time monitoring.',
        img: 'https://blockcode.in/assets/BlockCode-Website-Hero-Image-Promptpng.png',
        categories: ['hosting', 'live'],
        tag: 'Live',
        featured: true,
        tech: ['Node.js', 'PHP', 'MySQL', 'DDoS Mitigation', 'Stripe API', 'Docker'],
        link: '/projects/blockcode',
        liveLink: 'https://blockcode.in',
        icon: 'rocket_launch',
        features: [
            'Automated Server Provisioning',
            'Custom Management Dashboard',
            '99.9% Uptime Guarantee',
            'Enterprise-grade DDoS Protection',
            'Global Edge Locations'
        ]
    },
    {
        id: 'panel',
        title: 'Panel — Hosting Manager',
        description: "Custom-built hosting control panel for managing Blockcode's server fleet, client accounts, and resource allocation.",
        overview: 'A proprietary infrastructure management tool built to handle the complexities of a growing hosting business. It manages resource scaling, client billing, and automated support tickets.',
        gradient: 'linear-gradient(135deg, #0a1507 0%, #1a3210 50%, #2d4a1a 100%)',
        categories: ['hosting'],
        isPrivate: true,
        tech: ['TypeScript', 'Node.js', 'REST API', 'Redis'],
        icon: 'dashboard',
        features: [
            'Fleet Management',
            'Automated Backups',
            'Resource Monitoring',
            'Client Billing Integration'
        ]
    },
    {
        id: 'vault',
        title: 'Vault Plugin',
        description: 'Economy, chat, and permissions abstraction API for Minecraft servers — plugin-agnostic integration layer.',
        overview: 'The definitive API for Minecraft server developers. Vault provides a standardized bridge between hundreds of different plugins, ensuring compatibility across the entire ecosystem.',
        img: 'https://iili.io/KZhouzF.png',
        categories: ['tools'],
        tech: ['Java', 'Bukkit API', 'Plugin Dev'],
        link: '/projects/vault',
        liveLink: 'https://hackerplayz41.github.io/vault2.0.github.io/',
        github: 'https://github.com/hackerplayz41vault2.0.github.io',
        icon: 'api',
        features: [
            'Standardized Economy API',
            'Permission System Abstraction',
            'Chat Hooking System',
            'Widely used across 100,000+ servers'
        ]
    },
    {
        id: 'discord-finder',
        title: 'Discord Profile Finder',
        description: 'Real-time Discord profile viewer using multi-API integration — lookup any user by ID instantly.',
        overview: 'A developer-centric tool for retrieving public Discord profile data. It integrates multiple unofficial and official API endpoints to provide a comprehensive look at any user account.',
        img: 'https://iili.io/FQWWjRV.png',
        categories: ['tools', 'live'],
        tech: ['JavaScript', 'Discord API', 'REST APIs'],
        link: '/projects/discord-finder',
        liveLink: 'https://blockcode.space',
        github: 'https://github.com/hackerplayz41Discord-Userid-api',
        icon: 'search',
        features: [
            'Instant ID Lookup',
            'Avatar & Banner Extraction',
            'Public Metadata Display',
            'Clean UI Design'
        ]
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Store',
        description: 'Full-stack Next.js store with ZIP-based delivery logic and Razorpay payment integration — production-grade.',
        overview: 'A robust e-commerce solution built for physical goods. It includes complex delivery logic that calculates shipping based on regional ZIP codes and a seamless payment checkout flow.',
        img: 'https://iili.io/KIGtUut.jpg',
        categories: ['ecommerce', 'live'],
        tech: ['Next.js', 'React', 'Razorpay', 'MySQL'],
        link: '/projects/ecommerce',
        liveLink: 'https://api.blockcode.in',
        icon: 'shopping_cart',
        features: [
            'Dynamic ZIP-based Delivery',
            'Razorpay Integration',
            'Admin Dashboard Control',
            'Order Tracking'
        ]
    },
    {
        id: 'chatbot',
        title: 'Chatbot Widget',
        description: 'Embeddable AI chatbot powered by OpenAI — drop a single script tag to add smart chat to any website.',
        overview: 'A drop-in solution for website owners. This widget uses GPT-4 to handle customer inquiries, trained on custom site data provided via the admin panel.',
        img: 'https://iili.io/Klg81Hl.png',
        categories: ['tools'],
        tech: ['OpenAI API', 'Node.js', 'JWT Auth'],
        link: '/projects/chatbot',
        liveLink: 'https://chatbot.blockcode.in',
        icon: 'smart_toy',
        features: [
            'One-line Installation',
            'Custom Training Data',
            'Real-time Chat History',
            'Lead Generation'
        ]
    },
    {
        id: 'vsmehandi',
        title: 'VS Mehandi Art',
        description: 'Live production website for a real client — a mehndi art portfolio with e-commerce and booking functionality.',
        overview: 'Created for a professional artist, this site combines a high-resolution gallery with a functional shop for tools and a booking system for appointments.',
        gradient: 'linear-gradient(135deg, #1a0a12 0%, #3d1a2e 50%, #6b2d4a 100%)',
        categories: ['live', 'client'],
        tag: 'Live',
        tech: ['HTML/CSS', 'JavaScript'],
        liveLink: 'https://vsmehandi.art',
        icon: 'brush'
    },
    {
        id: 'marketplace',
        title: 'Blockcode Marketplace',
        description: 'TypeScript marketplace platform — part of the Blockcode ecosystem for buying and selling digital hosting products.',
        overview: 'A dedicated marketplace for digital assets within the blockcode.in ecosystem. Built with TypeScript to ensure type safety in complex transaction logic.',
        gradient: 'linear-gradient(135deg, #0d1a09 0%, #2d4a1a 60%, #4F633D 100%)',
        categories: ['ecommerce', 'hosting'],
        isPrivate: true,
        tech: ['TypeScript', 'REST API', 'Auth'],
        icon: 'storefront'
    },
    {
        id: 'kolhapuri-v2',
        title: 'Chappal Heritage Hub V2',
        description: 'Complete TypeScript rewrite of the Kolhapuri Chappal store — full product catalog, cart, and checkout flow.',
        overview: 'Version 2.0 of a heritage footwear store. Refactored from legacy PHP to modern TypeScript and React for better performance and a smoother shopping experience.',
        img: 'https://kolhapuri.blockcode.in/mens-kolhapuri-chappals-leather-sandals.jpg',
        categories: ['ecommerce'],
        isPrivate: true,
        tech: ['TypeScript', 'React', 'E-commerce'],
        icon: 'shopping_bag'
    },
    {
        id: 'blast',
        title: 'Blast Broadcast Hub',
        description: 'TypeScript broadcasting system — send targeted messages across multiple channels and platforms.',
        overview: 'A high-throughput messaging system built for mass notification delivery across Discord, Telegram, and Email.',
        gradient: 'linear-gradient(135deg, #07090d 0%, #111827 50%, #1e3a5f 100%)',
        categories: ['tools'],
        isPrivate: true,
        tech: ['TypeScript', 'WebSockets', 'APIs'],
        icon: 'campaign'
    },
    {
        id: 'kolhapuri-original',
        title: 'Kolhapuri Chappal',
        description: 'Traditional handcrafted leather footwear e-commerce store. Live at kolhapuri.blockcode.in.',
        overview: 'The original deployment of the heritage footwear store. Built with PHP and MySQL to handle high traffic and production orders.',
        img: 'https://kolhapuri.blockcode.in/mens-kolhapuri-chappals-leather-sandals.jpg',
        categories: ['ecommerce', 'live'],
        tag: 'Live',
        tech: ['JavaScript', 'PHP', 'MySQL'],
        link: '/projects/kolhapuri',
        liveLink: 'https://kolhapuri.blockcode.in',
        icon: 'shopping_cart'
    },
    {
        id: 'solar-system',
        title: 'Solar System Simulation',
        description: 'Interactive animated solar system built with HTML5 Canvas — planets orbit in real time, no libraries.',
        overview: 'A creative physics simulation. This project demonstrates raw JavaScript power, calculating orbital paths and gravity without any external game engines or libraries.',
        img: 'https://iili.io/FQX1BaV.png',
        categories: ['creative'],
        tech: ['HTML5 Canvas', 'JavaScript', 'Physics'],
        link: '/projects/solar-system',
        liveLink: 'https://HACKERPLAYZ41.github.io/earth.html',
        github: 'https://github.com/hackerplayz41HACKERPLAYZ41.github.io/blob/main/earth.html',
        icon: 'public'
    },
    {
        id: 'birthday',
        title: 'Birthday Gift',
        description: 'Animated open-source personal gift website template — confetti, countdown, and music player included.',
        overview: 'A fun, interactive template designed for personal celebrations. It uses GSAP for complex timeline-based animations and interactive triggers.',
        img: 'https://iili.io/FQJ2PFn.png',
        categories: ['creative'],
        tech: ['HTML/CSS', 'JavaScript', 'GSAP'],
        link: '/projects/birthday',
        liveLink: 'https://hackerplayz41.github.io/lala.html',
        github: 'https://github.com/hackerplayz41HACKERPLAYZ41.github.io/blob/main/lala.html',
        icon: 'cake'
    },
    {
        id: 'login-page',
        title: 'Premium Login Page',
        description: 'Sleek, fully responsive authentication interface with glass morphism design — copy-paste ready template.',
        overview: 'A demonstration of modern web design. This project focuses on the "feeling" of the interface — using subtle shadows, glassmorphism, and micro-interactions.',
        img: 'https://iili.io/KZDTWqx.png',
        categories: ['creative'],
        tech: ['HTML/CSS', 'Tailwind CSS', 'JS'],
        link: '/projects/login-page',
        liveLink: 'https://hackerplayz41.github.io/login%20page/index.html',
        github: 'https://github.com/HACKERPLAYZ41/HACKERPLAYZ41.github.io/tree/main/login%20page',
        icon: 'login'
    },
    {
        id: 'sorry-page',
        title: 'Personal Sorry Page',
        description: 'Modern aesthetic personal message page built with Tailwind CSS — minimalist and elegant design.',
        overview: 'A simple but elegantly designed personal page used for conveying messages. It showcases the power of minimalist design and smooth typography with Tailwind CSS.',
        img: 'https://iili.io/KZDagwB.png',
        categories: ['creative'],
        tech: ['TypeScript', 'React', 'Tailwind CSS'],
        link: '/projects/sorry-page',
        liveLink: 'https://trustedseller.fun',
        icon: 'sentiment_very_satisfied'
    },
    {
        id: 'promotion',
        title: 'Promotion Website',
        description: 'Custom API with authentication, rate limiting, and documentation with proper SEO.',
        overview: 'Developed a robust promotional platform with a focus on SEO and performance. Included a custom back-end API for managing content, user authentication, and secure access.',
        img: 'https://iili.io/FQXIjaa.png',
        categories: ['client'],
        tech: ['React.js', 'PHP', 'JWT', 'Tailwind CSS'],
        link: '/projects/promotion',
        liveLink: 'https://vsmehandi.art',
        icon: 'campaign'
    }
];
