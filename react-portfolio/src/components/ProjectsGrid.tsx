import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { projects } from '../data/projects';

const ProjectsGrid = () => {
    // Show the exact 10 projects from original index.html
    const homeProjects = projects.filter(p => 
        ['blockcode', 'vault', 'discord-finder', 'ecommerce', 'chatbot', 'kolhapuri-original', 'solar-system', 'birthday', 'login-page', 'sorry-page'].includes(p.id)
    );

    return (
        <section className="py-12 md:py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label mb-4 flex items-center gap-2 w-fit">
                            <Grid size={14} />
                            My Work
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-main">
                            Projects & <span className="text-primary">Builds</span>
                        </h2>
                        <p className="text-text-main/55 mt-2">Hover a card to explore — click to read more.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary border-2 border-primary/20 hover:border-primary/50 hover:bg-background-alt px-5 py-2.5 rounded-xl transition-all"
                        >
                            View All 14 Projects
                            <ExternalLink size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-5">
                    {homeProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={cn(
                                "group relative rounded-3xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-500",
                                project.featured && "md:col-span-2 md:row-span-2",
                                project.id === 'discord-finder' && "md:row-span-2",
                                (project.id === 'kolhapuri-original' || project.id === 'sorry-page') && "md:col-span-2"
                            )}
                        >
                            <div className="block w-full h-full cursor-pointer">
                                {/* Background Image / Gradient */}
                                <div className="absolute inset-0 z-0">
                                    {project.img ? (
                                        <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                                    ) : (
                                        <div className="w-full h-full" style={{ background: project.gradient }} />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="size-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            <span className="material-symbols-outlined text-[1.2rem]">{project.icon}</span>
                                        </div>
                                        {project.tag && (
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-wider",
                                                project.featured ? "bg-primary text-background" : "bg-white/20 text-white backdrop-blur-md"
                                            )}>
                                                {project.tag}
                                            </span>
                                        )}
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <h3 className={cn(
                                            "font-black text-white leading-tight mb-2",
                                            project.featured ? "text-2xl md:text-3xl" : "text-xl"
                                        )}>
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <Link to={project.link || '#'} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                                                Details
                                                <ArrowRight size={14} />
                                            </Link>
                                            <div className="flex items-center gap-3">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors" title="GitHub Repository">
                                                        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                    </a>
                                                )}
                                                {project.liveLink && (
                                                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors" title="Live Demo">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
