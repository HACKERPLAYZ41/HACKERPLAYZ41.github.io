import { motion } from 'framer-motion';
import { Mail, ArrowRight, BookOpen, Bell } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog = () => {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Blog Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14"
                >
                    <span className="section-label mb-4 flex items-center gap-2 w-fit">
                        <BookOpen size={14} /> Writing & Thoughts
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-text-main">
                        The <span className="text-primary italic">Blog</span>
                    </h1>
                    <p className="text-text-main/60 mt-4 text-lg max-w-2xl font-medium leading-relaxed">
                        Articles, tutorials, and my thoughts on software engineering, hosting infrastructure, and the web.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {blogPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] border border-primary/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col group"
                        >
                            <div className="h-48 overflow-hidden border-b border-primary/5 relative">
                                <img
                                    src={post.image}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    alt={post.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-primary/10 rounded-lg text-primary font-black text-[0.6rem] tracking-widest uppercase">
                                        {post.category}
                                    </span>
                                    <span className="text-[0.65rem] text-text-main/40 font-black uppercase tracking-widest flex items-center gap-1.5">
                                        <Bell size={10} className="animate-pulse" /> {post.status}
                                    </span>
                                </div>
                                <h2 className="text-xl font-black mb-3 text-text-main leading-snug group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-text-main/60 mb-6 line-clamp-3 font-medium leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-main/20 cursor-not-allowed">
                                        Coming Soon <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary text-background rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl shadow-primary/20 relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute -top-24 -right-24 size-64 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-24 -left-24 size-48 bg-white/5 rounded-full" />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">Stay in the loop.</h3>
                        <p className="opacity-70 max-w-xl mx-auto mb-10 font-medium">
                            I rarely publish, but when I do, it's packed with technical value. No spam, just pure engineering.
                        </p>
                        <form
                            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                            onSubmit={(e) => { e.preventDefault(); alert('Newsletter coming soon!'); }}
                        >
                            <div className="flex-grow relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    required
                                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-bold"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-white text-primary font-black rounded-xl hover:bg-background-alt transition-all active:scale-95 shadow-xl shadow-black/10"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Blog;
