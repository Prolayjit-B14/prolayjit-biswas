"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Send, MapPin, Mail, Phone, CheckCircle, Loader2, AlertCircle, Calendar } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const CONTACTS = [
    { icon: Mail,    label: "Email",    value: "prolayjitbiswas14112004@gmail.com", href: "mailto:prolayjitbiswas14112004@gmail.com", accent: "#00f2ff" },
    { icon: Phone,   label: "Phone",    value: "+91 93396 15464",                    href: "tel:+919339615464", accent: "#ff0055" },
    { icon: MapPin,  label: "Location", value: "Kolkata, WB // IND",        href: undefined, accent: "#00f2ff" },
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

    const inputCls = "w-full border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00f2ff]/40 focus:ring-1 focus:ring-[#00f2ff]/10 transition-all placeholder:text-zinc-600 text-white text-sm bg-[#0f172a]/40 backdrop-blur-3xl font-medium";

    return (
        <section id="contact" className="relative h-screen bg-[#020617] flex items-center overflow-hidden py-32">
            <Container>
                <div className="flex flex-col md:flex-row gap-14 items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-5/12"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-[#00f2ff] font-black text-[10px] uppercase tracking-[0.4em] mb-6 bg-[#00f2ff]/5 px-5 py-2 rounded-full border border-[#00f2ff]/10 w-fit"
                        >
                            Signal Origin
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 text-white uppercase leading-none">
                            Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff0055]">Channel</span>
                        </h2>

                        <div className="space-y-6">
                            {CONTACTS.map(({ icon: Icon, label, value, href, accent }) => (
                                <div key={label} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 shadow-2xl" style={{ color: accent }}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-sm font-black text-white hover:opacity-70 transition-all tracking-tight">{value}</a>
                                        ) : (
                                            <span className="text-sm font-black text-white tracking-tight">{value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 backdrop-blur-3xl shadow-2xl">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f2ff]" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00f2ff]">Available For Opportunities 2025</span>
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
                                    className="w-full group flex items-center justify-center gap-4 rounded-2xl bg-white text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-[#00f2ff] hover:text-white disabled:opacity-70 shadow-2xl"
                                >
                                    {status === "loading" ? (
                                        <><Loader2 className="h-4 w-4 animate-spin" /> Transmitting...</>
                                    ) : (
                                        <>Dispatch Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
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
