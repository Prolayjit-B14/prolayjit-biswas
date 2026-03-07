"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-background z-10 border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 item-center justify-between">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-glow"
                        >
                            Let's Build Together
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground mb-12"
                        >
                            Whether it's a PCB design, an IoT system, a full-stack platform, or a hackathon collaboration—my inbox is always open.
                        </motion.p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Email</p>
                                    <a href="mailto:prolayjitbiswas14112004@gmail.com" className="hover:text-primary transition-colors">
                                        prolayjitbiswas14112004@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Phone</p>
                                    <span>+91 9339615464</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Location</p>
                                    <span>Kolkata, West Bengal, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 glass-card p-8 rounded-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input id="name" type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input id="email" type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input id="subject" type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" rows={5} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your project..." />
                            </div>

                            <button
                                type="submit"
                                className="w-full group flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                            >
                                Send Transmission
                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
