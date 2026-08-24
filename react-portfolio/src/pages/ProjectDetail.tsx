import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Lock, CheckCircle2, Cpu, Globe } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <main className="pt-32 pb-24 text-center">
                <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
                <Link to="/projects" className="text-primary font-bold hover:underline">Back to All Projects</Link>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-text-main/50 hover:text-primary transition-colors font-bold group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {/* Media Header */}
                    <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border border-primary/5">
                        {project.img ? (
                            <img src={project.img} className="w-full h-full object-cover" alt={project.title} />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center" style={{ background: project.gradient }}>
                                <span className="material-symbols-outlined text-8xl text-white/30">{project.icon}</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <span className="bg-primary text-background text-[0.65rem] font-black px-3 py-1 rounded-lg uppercase tracking-widest mb-3 inline-block">
                                    {project.categories[0].replace('-', ' ')}
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-white">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="flex gap-4">
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-white text-text-main px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-background transition-all shadow-xl">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="bg-black/40 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-black/60 transition-all">
                                        GitHub <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-text-main mb-4">Overview</h2>
                                <p className="text-lg text-text-main/70 leading-relaxed font-medium">
                                    {project.overview || project.description}
                                </p>
                            </section>

                            {project.features && (
                                <section>
                                    <h2 className="text-2xl font-black text-text-main mb-6">Key Features</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {project.features.map((feature) => (
                                            <div key={feature} className="flex gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/5">
                                                <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                                                <span className="text-sm font-bold text-text-main/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-8 sticky top-32">
                            <div className="bg-white rounded-[2rem] p-8 border border-primary/5 shadow-xl shadow-primary/5">
                                <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-primary/40 mb-6 flex items-center gap-2">
                                    <Cpu size={14} /> Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-4 py-2 bg-background border border-primary/5 rounded-xl text-xs font-bold text-text-main/60">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.isPrivate ? (
                                <div className="p-8 bg-secondary/10 rounded-[2rem] border border-secondary/20">
                                    <h3 className="text-sm font-black text-secondary flex items-center gap-2 mb-2">
                                        <Lock size={16} /> Repository Private
                                    </h3>
                                    <p className="text-xs text-secondary/70 font-bold leading-relaxed">
                                        Source code for this project is hosted on a private server for security and client confidentiality.
                                    </p>
                                </div>
                            ) : (
                                <div className="p-8 bg-primary/10 rounded-[2rem] border border-primary/20">
                                    <h3 className="text-sm font-black text-primary flex items-center gap-2 mb-2">
                                        <Globe size={16} /> Open Source
                                    </h3>
                                    <p className="text-xs text-primary/70 font-bold leading-relaxed">
                                        This project is publicly available on GitHub. Feel free to explore the codebase and contribute.
                                    </p>
                                </div>
                            )}

                            {/* Contact Strip */}
                            <div className="p-8 bg-text-main text-background rounded-[2rem] shadow-2xl">
                                <p className="font-black text-sm mb-4 leading-tight">Interested in a similar project?</p>
                                <a href="mailto:hello@blockcode.in" className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all uppercase tracking-widest text-[0.65rem]">
                                    Get a quote <ArrowLeft size={14} className="rotate-180" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ProjectDetail;
