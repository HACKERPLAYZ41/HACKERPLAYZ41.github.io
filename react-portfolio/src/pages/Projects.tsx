import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Grid, ExternalLink, Lock, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

const categories = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'live', label: '🟢 Live', count: projects.filter(p => p.categories.includes('live')).length },
    { id: 'hosting', label: '🏠 Hosting', count: projects.filter(p => p.categories.includes('hosting')).length },
    { id: 'ecommerce', label: '🛒 E-commerce', count: projects.filter(p => p.categories.includes('ecommerce')).length },
    { id: 'tools', label: '🤖 AI & Tools', count: projects.filter(p => p.categories.includes('tools')).length },
    { id: 'creative', label: '🎨 Creative', count: projects.filter(p => p.categories.includes('creative')).length },
    { id: 'client', label: '👤 Client Work', count: projects.filter(p => p.categories.includes('client')).length }
];

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projects.filter(p =>
        filter === 'all' ? true : p.categories.includes(filter)
    );

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-main/50 hover:text-primary transition-colors font-bold group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="section-label mb-4 flex items-center gap-2 w-fit">
                            <Grid size={14} /> Complete Archive
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-text-main leading-tight">
                            All <span className="text-primary italic">Projects</span>
                        </h1>
                        <p className="text-text-main/55 mt-2 max-w-xl leading-relaxed font-medium">
                            A comprehensive collection of my work in hosting, e-commerce, and specialized developer tools.
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 bg-white border border-primary/5 rounded-[2rem] px-8 py-5 shadow-sm"
                    >
                        <div className="text-center">
                            <p className="text-2xl font-black text-primary">{projects.length}</p>
                            <p className="text-[0.6rem] uppercase tracking-widest font-black opacity-30">Total</p>
                        </div>
                        <div className="w-px h-10 bg-primary/5" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-green-600">{projects.filter(p => p.categories.includes('live')).length}</p>
                            <p className="text-[0.6rem] uppercase tracking-widest font-black opacity-30">Live</p>
                        </div>
                        <div className="w-px h-10 bg-primary/5" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-secondary">{projects.filter(p => p.isPrivate).length}</p>
                            <p className="text-[0.6rem] uppercase tracking-widest font-black opacity-30">Private</p>
                        </div>
                    </motion.div>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-12 scrollbar-hide overflow-x-auto pb-2"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={cn(
                                "px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                                filter === cat.id
                                    ? "bg-primary text-background shadow-lg shadow-primary/20 scale-105"
                                    : "bg-white border border-primary/5 text-text-main/60 hover:bg-primary/5 hover:text-primary"
                            )}
                        >
                            {cat.label} <span className="opacity-40 ml-1 text-xs">({cat.count})</span>
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-3xl border border-primary/5 overflow-hidden flex flex-col hover:border-primary/20 hover:shadow-2xl transition-all h-full"
                            >
                                {/* Media */}
                                <div className="relative h-48 overflow-hidden bg-background">
                                    {project.img ? (
                                        <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center" style={{ background: project.gradient }}>
                                            <span className="material-symbols-outlined text-4xl text-white/40">{project.icon}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <div className="flex gap-2">
                                            {project.categories.includes('live') && (
                                                <span className="bg-green-500 text-white text-[0.6rem] font-bold px-2 py-1 rounded-lg flex items-center gap-1 uppercase tracking-tighter">
                                                    <span className="size-1 bg-white rounded-full animate-pulse" /> Live
                                                </span>
                                            )}
                                            {project.featured && (
                                                <span className="bg-primary text-background text-[0.6rem] font-bold px-2 py-1 rounded-lg uppercase tracking-tighter">
                                                    ⭐ Featured
                                                </span>
                                            )}
                                        </div>
                                        {project.isPrivate && (
                                            <span className="bg-black/40 backdrop-blur-md text-white/80 p-1.5 rounded-lg border border-white/10">
                                                <Lock size={14} />
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="text-[0.65rem] font-black uppercase tracking-widest text-primary opacity-60 mb-1 block">
                                            {project.categories[0].replace('-', ' ')}
                                        </span>
                                        <h3 className="text-xl font-black text-text-main line-clamp-1">{project.title}</h3>
                                    </div>

                                    <p className="text-sm text-text-main/60 line-clamp-2 mb-5 font-medium leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[0.6rem] font-bold px-2 py-1 bg-primary/5 text-primary/70 rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                                        {project.isPrivate ? (
                                            <span className="text-[0.7rem] font-black uppercase tracking-widest text-text-main/30 flex items-center gap-1.5">
                                                <Lock size={12} /> Repository Private
                                            </span>
                                        ) : (
                                            <div className="flex items-center gap-4 w-full">
                                                <Link to={project.link || '#'} className="text-sm font-bold text-primary flex items-center gap-1 group/link">
                                                    Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                                <div className="flex items-center gap-3 ml-auto">
                                                    {project.github && (
                                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-text-main/40 hover:text-primary flex items-center gap-1 transition-colors">
                                                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {project.liveLink && (
                                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-text-main/40 hover:text-primary flex items-center gap-1 transition-colors">
                                                            <ExternalLink size={14} /> Live
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
};

export default Projects;
