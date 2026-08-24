import { motion } from 'framer-motion';
import { Gamepad2, Bot, Globe, Handshake, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Minecraft Hosting',
        description: 'NVMe SSDs, DDoS protection, and 99.9% uptime for the best gaming experience.',
        icon: <Gamepad2 className="size-6" />,
        link: 'https://blockcode.in',
        linkText: 'Visit blockcode.in'
    },
    {
        title: 'Bot Hosting & Dev',
        description: 'Discord & Telegram bots on reliable infrastructure — 24/7 runtime, easy management.',
        icon: <Bot className="size-6" />,
        link: '/#contact',
        linkText: 'Get a Quote'
    },
    {
        title: 'Web App Development',
        description: 'High-end React & Next.js applications tailored for your business needs.',
        icon: <Globe className="size-6" />,
        link: '/#contact',
        linkText: 'Learn More'
    }
];

const Services = () => {
    return (
        <section className="py-12 md:py-24 bg-background" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-label mb-4 flex items-center gap-2 w-fit mx-auto"
                    >
                        <Handshake size={14} />
                        Freelance & Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-text-main"
                    >
                        What I Can Build for You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-main/55 max-w-xl mx-auto mt-3 leading-relaxed"
                    >
                        From hosting infrastructure to custom web apps — I take on freelance work with a focus on quality and reliability.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 bg-white rounded-3xl border border-primary/5 hover:border-primary/20 transition-all hover:-translate-y-2 hover:shadow-xl shadow-sm"
                        >
                            <div className="size-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-text-main">{service.title}</h3>
                            <p className="text-text-main/65 leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>
                            <a
                                href={service.link}
                                target={service.link.startsWith('http') ? '_blank' : '_self'}
                                rel={service.link.startsWith('http') ? 'noreferrer' : ''}
                                className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all"
                            >
                                {service.linkText}
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
