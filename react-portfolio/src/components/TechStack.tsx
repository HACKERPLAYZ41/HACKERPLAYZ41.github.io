import { motion } from 'framer-motion';
import { Layout, Database, Cpu, Code2 } from 'lucide-react';

const technologies = [
    {
        title: 'Frontend & UI',
        icon: <Layout className="size-6" />,
        items: [
            { name: 'React & Next.js', emoji: '⚛️' },
            { name: 'Tailwind CSS', emoji: '🎨' },
            { name: 'GSAP Animations', emoji: '🎭' },
            { name: 'HTML5 & JS (ES2022+)', emoji: '⚡' },
        ]
    },
    {
        title: 'Backend & DB',
        icon: <Database className="size-6" />,
        items: [
            { name: 'Node.js (TypeScript)', emoji: '🟢' },
            { name: 'PHP', emoji: '🐘' },
            { name: 'MySQL', emoji: '🐬' },
        ]
    },
    {
        title: 'Specialized Tools',
        icon: <Cpu className="size-6" />,
        items: [
            { name: 'Discord.js', emoji: '🤖' },
            { name: 'Java (Minecraft)', emoji: '☕' },
            { name: 'Git & GitHub', emoji: '🐙' },
        ]
    }
];

const TechStack = () => {
    return (
        <section className="py-12 md:py-24 bg-background border-y border-primary/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-6"
                    >
                        <Code2 size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Tech Stack</span>
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-text-main mb-4"
                    >
                        Tools I Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-main opacity-60 max-w-2xl mx-auto"
                    >
                        The technologies and frameworks I use to build scalable digital experiences.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={tech.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-text-main">{tech.title}</h3>
                            <div className="flex flex-col gap-4">
                                {tech.items.map((item, i) => (
                                    <div key={item.name}>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-text-main/80">{item.name}</span>
                                            <span className="text-xl">{item.emoji}</span>
                                        </div>
                                        {i < tech.items.length - 1 && <div className="w-full h-px bg-primary/5 mt-4" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
