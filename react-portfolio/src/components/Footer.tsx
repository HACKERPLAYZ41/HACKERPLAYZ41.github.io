import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-background pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-background p-1.5 rounded-lg text-primary">
                                <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                                        fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-2xl font-black">Utkarsh</span>
                        </div>
                        <p className="text-sm opacity-60 leading-relaxed max-w-xs">
                            Designing and engineering digital experiences that define the future. Let's build something exceptional together.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-sm font-semibold hover:text-secondary-light transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-sm font-semibold hover:text-secondary-light transition-colors">About</Link></li>
                            <li><Link to="/#projects" className="text-sm font-semibold hover:text-secondary-light transition-colors">Projects</Link></li>
                            <li><Link to="/blog" className="text-sm font-semibold hover:text-secondary-light transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Services & Support */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/#services" className="text-sm font-semibold hover:text-secondary-light transition-colors">Web Dev</Link></li>
                            <li><Link to="/#services" className="text-sm font-semibold hover:text-secondary-light transition-colors">Bot Infrastructure</Link></li>
                            <li><Link to="/terms-of-service" className="text-sm font-semibold hover:text-secondary-light transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="text-sm font-semibold hover:text-secondary-light transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="https://github.com/hackerplayz41" target="_blank" rel="noreferrer"
                                className="size-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://discord.com/invite/DugRxFGKGD" target="_blank" rel="noreferrer"
                                className="size-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-primary transition-all">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                            </a>
                        </div>
                        <a href="mailto:hello@blockcode.in" className="inline-flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                            <Mail size={16} />
                            hello@blockcode.in
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-background/10 opacity-55 text-xs">
                    <p>© 2026 Utkarsh Halwai. All rights reserved by Utkarsh Halwai.</p>
                    <div className="flex gap-8">
                        <Link className="hover:underline" to="/privacy-policy">Privacy Policy</Link>
                        <Link className="hover:underline" to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
