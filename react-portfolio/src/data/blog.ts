export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    status: 'Published' | 'Coming Soon';
}

export const blogPosts: BlogPost[] = [
    {
        id: 'scaling-blockcode',
        title: 'Scaling blockcode.in: Lessons from our first 500 clients',
        excerpt: 'A deep dive into the infrastructure choices we made, the mistakes we learned from, and how we maintain 99.9% uptime for Minecraft servers and Discord bots.',
        date: '2025-03-01',
        category: 'Engineering',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
        status: 'Coming Soon'
    },
    {
        id: 'discord-bot-dashboard',
        title: 'Building a Discord Bot Dashboard with React & Node.js',
        excerpt: 'A step-by-step guide to creating a full-stack dashboard for managing your discord.js bot, complete with OAuth2 login and real-time settings updates.',
        date: '2025-02-15',
        category: 'Tutorial',
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800',
        status: 'Coming Soon'
    },
    {
        id: 'ui-design-principles',
        title: 'Premium UI Design Principles for Web Applications',
        excerpt: 'Exploring best practices for clean, modern interfaces that wow users while maintaining accessibility and speed.',
        date: '2025-01-20',
        category: 'UI / Design',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800',
        status: 'Coming Soon'
    }
];
