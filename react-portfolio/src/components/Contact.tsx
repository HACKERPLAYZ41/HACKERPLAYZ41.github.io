import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!hcaptchaToken) {
            setStatus('error');
            setMessage('Please complete the hCaptcha check before submitting.');
            return;
        }

        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '60dea98d-be02-45ba-ad87-68872ac5d917',
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    'h-captcha-response': hcaptchaToken
                }),
            });

            const text = await response.text();
            let result;
            try {
                result = JSON.parse(text);
            } catch {
                throw new Error('Server response was not JSON: ' + text);
            }

            if (response.ok && result.success) {
                setStatus('success');
                setMessage('Message sent successfully! I will get back to you soon.');
                (e.target as HTMLFormElement).reset();
                setHcaptchaToken(null);
            } else {
                throw new Error(result.message || 'Failed to submit form.');
            }
        } catch (err: any) {
            setStatus('error');
            setMessage(err.message || 'Failed to send message. Please try again later.');
        }
    };

    return (
        <section className="py-20 lg:py-32 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label mb-6 flex items-center gap-2 w-fit">
                            <MessageSquare size={14} />
                            Get In Touch
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-text-main mb-6 leading-tight">
                            Let's Build Something <span className="text-primary italic">Incredible</span> Together.
                        </h2>
                        <p className="text-lg text-text-main/60 mb-10 max-w-lg leading-relaxed">
                            Have a project in mind? Or just want to say hi? I'm always open to new opportunities and collaborations.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-5">
                                <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest opacity-40">Email Me</p>
                                    <a href="mailto:hello@blockcode.in" className="text-lg font-bold text-text-main hover:text-primary transition-colors">
                                        hello@blockcode.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest opacity-40">Based In</p>
                                    <p className="text-lg font-bold text-text-main">
                                        Mumbai, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-3xl p-8 md:p-10 border border-primary/5 shadow-xl shadow-primary/5"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest opacity-40 ml-1">Full Name</label>
                                    <input
                                        type="text" id="name" name="name" required placeholder="John Doe"
                                        className="bg-white border border-primary/10 px-5 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest opacity-40 ml-1">Email Address</label>
                                    <input
                                        type="email" id="email" name="email" required placeholder="john@example.com"
                                        className="bg-white border border-primary/10 px-5 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest opacity-40 ml-1">Subject</label>
                                <input
                                    type="text" id="subject" name="subject" required placeholder="Project Collaboration"
                                    className="bg-white border border-primary/10 px-5 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest opacity-40 ml-1">Message</label>
                                <textarea
                                    id="message" name="message" required rows={5} placeholder="Tell me about your project..."
                                    className="bg-white border border-primary/10 px-5 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold resize-none"
                                />
                            </div>

                            <div className="my-2 flex justify-center">
                                <HCaptcha
                                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    onVerify={(token) => setHcaptchaToken(token)}
                                    onExpire={() => setHcaptchaToken(null)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="mt-2 bg-primary text-background py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary-light active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:scale-100"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="flex items-center gap-3 p-4 bg-green-500/10 text-green-600 rounded-xl text-sm font-semibold border border-green-500/20">
                                    <CheckCircle2 size={18} />
                                    {message}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-3 p-4 bg-red-500/10 text-red-600 rounded-xl text-sm font-semibold border border-red-500/20">
                                    <AlertCircle size={18} />
                                    {message}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
