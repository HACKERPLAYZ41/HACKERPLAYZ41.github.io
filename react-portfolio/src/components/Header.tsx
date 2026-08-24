import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    const hashLinks = [
        { name: 'Services', path: '/#services' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "glass-nav h-16" : "bg-transparent h-20"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <NavLink to="/" className="flex items-center gap-3 group">
                        <div className="bg-primary p-1.5 rounded-lg text-white group-hover:scale-105 transition-transform">
                            <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                                    fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-xl font-black tracking-tight text-primary">Utkarsh</span>
                    </NavLink>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => cn(
                                    "text-sm font-semibold transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-text-main/60"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        {hashLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-semibold text-text-main/60 transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link to="/#contact"
                            className="hidden sm:inline-flex bg-primary text-background px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-light transition-all">
                            Say Hello
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-primary"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-background md:hidden transition-transform duration-500 pt-24 px-6",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6">
                    {[...navLinks, ...hashLinks].map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="text-2xl font-black text-text-main hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/#contact"
                        className="mt-4 bg-primary text-background px-6 py-4 rounded-xl text-center font-bold text-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Say Hello 👋
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
