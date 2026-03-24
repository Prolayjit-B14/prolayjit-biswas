"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Send, MapPin, Mail, Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const CONTACTS = [
    { icon: Mail,    label: "Email",    value: "prolayjitbiswas14112004@gmail.com", href: "mailto:prolayjitbiswas14112004@gmail.com" },
    { icon: Phone,   label: "Phone",    value: "+91 93396 15464",                    href: "tel:+919339615464" },
    { icon: MapPin,  label: "Location", value: "Kolkata, West Bengal, India",        href: undefined },
];

export function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok || data.error) {
                setErrorMsg(data.error ?? "Something went wrong. Please try again.");
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setErrorMsg("Network error. Please check your connection and try again.");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputCls = "w-full border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-[#4b5563] text-[#f8fafc] text-sm bg-[#0f172a]/80";

    return (
        <section id="contact" className="relative py-16 md:py-24 bg-background z-10 border-t border-white/5">
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
                            Let&apos;s Build Together
                        </h2>
                        <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-sm">
                            Whether it&apos;s a PCB design, IoT system, full-stack platform, or hackathon collaboration — my inbox is always open.
                        </p>

                        <div className="space-y-5">
                            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
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

                        {/* Availability badge */}
                        <div className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                            </span>
                            <span className="text-sm font-semibold text-primary">Available for opportunities — 2025</span>
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
                        {/* Status messages */}
                        <div
                            role="alert"
                            aria-live="polite"
                            className={status === "idle" || status === "loading" ? "hidden" : ""}
                        >
                            {status === "success" && (
                                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                                    <CheckCircle className="w-14 h-14 text-primary" />
                                    <h3 className="text-2xl font-bold text-[#f8fafc]">Message Sent!</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Your message has been delivered. I&apos;ll get back to you soon!
                                    </p>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-3 rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3 mb-5">
                                    <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                                    <p className="text-sm text-rose-300">{errorMsg}</p>
                                </div>
                            )}
                        </div>

                        {(status === "idle" || status === "loading" || status === "error") && (
                            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Name <span className="text-rose-400">*</span>
                                        </label>
                                        <input
                                            id="name" type="text" required
                                            value={form.name} onChange={handleChange}
                                            aria-required="true"
                                            className={inputCls} placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Email <span className="text-rose-400">*</span>
                                        </label>
                                        <input
                                            id="email" type="email" required
                                            value={form.email} onChange={handleChange}
                                            aria-required="true"
                                            className={inputCls} placeholder="you@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                                    <input
                                        id="subject" type="text"
                                        value={form.subject} onChange={handleChange}
                                        className={inputCls} placeholder="Project Collaboration"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Message <span className="text-rose-400">*</span>
                                        </label>
                                        <span className={`text-[10px] ${form.message.length > 1800 ? "text-rose-400" : "text-[#4b5563]"}`}>
                                            {form.message.length}/2000
                                        </span>
                                    </div>
                                    <textarea
                                        id="message" rows={5} required maxLength={2000}
                                        value={form.message} onChange={handleChange}
                                        aria-required="true"
                                        className={`${inputCls} resize-none`}
                                        placeholder="Tell me about your project or idea..."
                                    />
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
