"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Send, MapPin, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus("loading");

        // Open mailto as a reliable fallback — works without a backend
        const mailtoUrl = `mailto:prolayjitbiswas14112004@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.open(mailtoUrl, "_blank");
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
    };

    const inputCls = "w-full border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-[#4b5563] text-[#f8fafc] text-sm";
    const lightInputBg = "bg-[#0f172a]/80";

    return (
        <section id="contact" className="relative py-16 bg-background z-10 border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row gap-14 items-start justify-between">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-5/12"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                            <Send className="h-3 w-3" /> Get In Touch
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-glow">
                            Let's Build Together
                        </h2>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-sm">
                            Whether it's a PCB design, IoT system, full-stack platform, or hackathon collaboration — my inbox is always open.
                        </p>

                        <div className="space-y-5">
                            {[
                                { icon: Mail, label: "Email", value: "prolayjitbiswas14112004@gmail.com", href: "mailto:prolayjitbiswas14112004@gmail.com" },
                                { icon: Phone, label: "Phone", value: "+91 93396 15464", href: "tel:+919339615464" },
                                { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India", href: undefined },
                            ].map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-sm text-[#f8fafc] hover:text-primary transition-colors">{value}</a>
                                        ) : (
                                            <span className="text-sm text-[#f8fafc]">{value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:w-7/12 w-full glass-card p-8 rounded-3xl"
                    >
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                                <CheckCircle className="w-14 h-14 text-primary" />
                                <h3 className="text-2xl font-bold text-[#f8fafc]">Message Sent!</h3>
                                <p className="text-muted-foreground text-sm">Your email client has been opened with the message. I&apos;ll get back to you soon!</p>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name *</label>
                                        <input id="name" type="text" required value={form.name} onChange={handleChange} className={`${inputCls} ${lightInputBg}`} placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email *</label>
                                        <input id="email" type="email" required value={form.email} onChange={handleChange} className={`${inputCls} ${lightInputBg}`} placeholder="you@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                                    <input id="subject" type="text" value={form.subject} onChange={handleChange} className={`${inputCls} ${lightInputBg}`} placeholder="Project Collaboration" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message *</label>
                                    <textarea id="message" rows={5} required value={form.message} onChange={handleChange} className={`${inputCls} ${lightInputBg} resize-none`} placeholder="Tell me about your project or idea..." />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(74,222,128,0.45)] disabled:opacity-70"
                                >
                                    {status === "loading" ? (
                                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                                    ) : (
                                        <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
