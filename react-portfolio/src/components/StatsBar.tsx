import { motion } from 'framer-motion';

const stats = [
    { number: '11+', label: 'Projects Built' },
    { number: '2+', label: 'Years Coding' },
    { number: '500+', label: 'Clients Served' },
    { number: '99.9%', label: 'Uptime SLA' },
];

const StatsBar = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center md:justify-between items-center gap-8 py-8 px-10 bg-background rounded-[2.5rem] border border-primary/5"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center md:items-start group">
                            <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform cursor-default">
                                {stat.number}
                            </p>
                            <p className="text-xs uppercase tracking-widest font-black opacity-40 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsBar;
