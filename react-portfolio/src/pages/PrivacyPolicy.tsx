import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter text-text-main flex items-center gap-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[0.65rem] opacity-40 mb-12 font-black uppercase tracking-[0.2em] text-primary">
                        Last Updated: March 2026
                    </p>

                    <div className="space-y-12 text-text-main/70 leading-relaxed font-medium">
                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">1</span>
                                Introduction
                            </h2>
                            <p>
                                Welcome to Utkarsh Halwai's portfolio. I respect your privacy and am committed to protecting it through my compliance with this policy. This policy describes the types of information I may collect from you or that you may provide when you visit my website and my practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">2</span>
                                Information Collection
                            </h2>
                            <p className="mb-4">I collect several types of information from and about users of my website, including:</p>
                            <ul className="space-y-3 list-none">
                                <li className="flex gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" size={18} />
                                    <span><strong>Personal Information:</strong> Name, email address, and message content when you use the contact form.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" size={18} />
                                    <span><strong>Usage Data:</strong> Details of your visits to our website, including traffic data, location data, logs, and other communication data.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">3</span>
                                How Information is Used
                            </h2>
                            <p className="mb-4">I use the information collected to:</p>
                            <ul className="space-y-3 list-none">
                                <li className="flex gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" size={18} />
                                    <span>Respond to your inquiries via the contact form.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" size={18} />
                                    <span>Improve the website and user experience.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" size={18} />
                                    <span>Monitor website performance and security.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">4</span>
                                Data Security
                            </h2>
                            <p>
                                I have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide is stored on secure servers behind firewalls.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">5</span>
                                Contact Information
                            </h2>
                            <p>
                                To ask questions or comment about this privacy policy and my privacy practices, contact me at:{' '}
                                <a href="mailto:hello@blockcode.in" className="text-primary font-bold underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">
                                    hello@blockcode.in
                                </a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
