import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TermsOfService = () => {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter text-text-main flex items-center gap-4">
                        Terms of Service
                    </h1>
                    <p className="text-[0.65rem] opacity-40 mb-12 font-black uppercase tracking-[0.2em] text-primary">
                        Last Updated: March 2026
                    </p>

                    <div className="space-y-12 text-text-main/70 leading-relaxed font-medium">
                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">1</span>
                                Acceptance of Terms
                            </h2>
                            <p>
                                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">2</span>
                                Use License
                            </h2>
                            <p className="mb-4">
                                Permission is granted to temporarily download one copy of the materials (information or software) on Utkarsh Halwai's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="space-y-3 list-none">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                    <span>Modify or copy the materials.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                    <span>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                    <span>Attempt to decompile or reverse engineer any software contained on the website.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                    <span>Remove any copyright or other proprietary notations from the materials.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">3</span>
                                Disclaimer
                            </h2>
                            <p>
                                The materials on Utkarsh Halwai's website are provided "as is". I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">4</span>
                                Limitations
                            </h2>
                            <p>
                                In no event shall Utkarsh Halwai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my Internet site, even if I have been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
                                <span className="size-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">5</span>
                                Contact
                            </h2>
                            <p>
                                If you have any questions regarding these terms, please contact me at:{' '}
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

export default TermsOfService;
