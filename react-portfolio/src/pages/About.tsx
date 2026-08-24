import { motion } from 'framer-motion';
import { Mail, MessageSquare, Code2, Star, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const timeline = [
        {
            year: 'Early 2024',
            title: 'Started Coding Seriously',
            desc: 'Fell deep into JavaScript and Java — built my first Discord bot and Minecraft plugins for fun, laying the groundwork for everything to come.'
        },
        {
            year: 'Late 2024',
            title: 'Launched blockcode.in',
            desc: 'Founded my own hosting company to offer premium bot hosting and Minecraft servers. It rapidly gained traction, securing my first paying clients within weeks.'
        },
        {
            year: '2025',
            title: 'Full-Stack Expansion & Growth',
            desc: 'Expanded heavily into full-stack web development, building e-commerce platforms, SaaS tools, and AI chatbots. Currently scaling blockcode.in and taking on increasingly ambitious projects.'
        }
    ];

    const expertise = [
        'Infrastructure Design', 'Bot Development', 'Minecraft Optimization',
        'React & Next.js', 'DDoS Mitigation', 'Node.js & PHP',
        'MySQL & REST APIs', 'UI/UX Design'
    ];

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-14"
                >
                    <div className="size-20 bg-primary text-background rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0 shadow-xl shadow-primary/20">
                        UH
                    </div>
                    <div>
                        <span className="section-label mb-2">Developer & Founder</span>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-text-main">
                            Utkarsh <span className="text-primary italic">Halwai</span>
                        </h1>
                        <p className="text-text-main/60 mt-2 text-base">
                            Building reliable software & infrastructure from India 🇮🇳
                        </p>
                        <div className="flex gap-4 mt-4 flex-wrap">
                            <a href="mailto:hello@blockcode.in" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                <Mail size={16} /> hello@blockcode.in
                            </a>
                            <a href="https://discord.com/invite/DugRxFGKGD" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                <MessageSquare size={16} /> Discord
                            </a>
                            <a href="https://github.com/hackerplayz41" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                <Code2 size={16} /> GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6 mb-14"
                >
                    <p className="text-xl leading-relaxed text-text-main/80 font-medium">
                        I'm Utkarsh — a full-stack developer and the founder of{' '}
                        <a href="https://blockcode.in" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">
                            blockcode.in
                        </a>.
                        I have been learning coding for <span className="font-black text-primary underline underline-offset-4 decoration-primary/20">2 years</span>, starting with a simple goal: to build things that actually work.
                    </p>
                    <p className="leading-relaxed text-text-main/70">
                        My work spans Discord bot development, Minecraft server infrastructure, web applications, and e-commerce platforms. I specialize in making complex systems feel simple — clean code, fast delivery, and zero unnecessary complexity.
                    </p>
                </motion.div>

                {/* Mission / Values */}
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl"
                    >
                        <h3 className="text-primary font-black text-xl mb-2">My Mission</h3>
                        <p className="text-text-main/65 text-sm leading-relaxed">
                            To build accessible, top-tier tools and hosting that never compromise on quality or security.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-2xl"
                    >
                        <h3 className="text-secondary font-black text-xl mb-2">My Approach</h3>
                        <p className="text-text-main/65 text-sm leading-relaxed">
                            Reliability first. I build systems that just work, so you can focus on what matters most.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label mb-4 flex items-center gap-2 w-fit">
                            <Star size={14} /> My Journey
                        </span>
                        <h2 className="text-2xl font-black mb-8 text-text-main">How I got here</h2>
                    </motion.div>
                    <div className="relative border-l-2 border-primary/10 ml-4 space-y-12 pb-4">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-10"
                            >
                                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background" />
                                <p className="text-sm font-black text-primary uppercase tracking-widest mb-1">{item.year}</p>
                                <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                                <p className="text-text-main/65 leading-relaxed text-sm max-w-2xl">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-black mb-6 text-text-main">Expertise</h2>
                    <div className="flex flex-wrap gap-3">
                        {expertise.map((skill) => (
                            <span key={skill} className="px-5 py-2.5 bg-primary/10 rounded-xl text-primary font-bold text-sm hover:bg-primary hover:text-background transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <Link to="/#projects" className="bg-primary text-background px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-all flex items-center gap-2 shadow-xl shadow-primary/20">
                        View My Projects
                        <Grid3X3 size={18} />
                    </Link>
                    <Link to="/#contact" className="border-2 border-primary/15 text-primary px-8 py-4 rounded-xl font-bold hover:border-primary/40 hover:bg-background-alt transition-all">
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};

export default About;
