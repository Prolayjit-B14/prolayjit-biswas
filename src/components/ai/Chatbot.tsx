"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "assistant", content: string }[]>([
        { role: "assistant", content: "Hi! I'm Prolayjit's AI assistant. Ask me about his skills, projects, or hardware experience." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: messages.concat({ role: "user", content: userMessage }).slice(-5) // Send limited history
                })
            });

            const data = await res.json();
            if (data.message) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, my circuits crossed. Something went wrong." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-transform hover:scale-110 z-50",
                    isOpen ? "scale-0 hidden" : "scale-100"
                )}
            >
                <MessageSquare className="h-6 w-6" />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-2">
                                <Bot className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-glow">AI Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                    )}
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        {msg.role === "user" ? (
                                            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                                                <User className="h-3 w-3 text-secondary-foreground" />
                                            </div>
                                        ) : (
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                                <Bot className="h-3 w-3 text-primary" />
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className={cn(
                                            "p-3 rounded-2xl text-sm",
                                            msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-secondary text-secondary-foreground rounded-tl-none"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 max-w-[85%] mr-auto">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 flex-shrink-0 mt-1">
                                        <Bot className="h-3 w-3 text-primary" />
                                    </div>
                                    <div className="p-3 rounded-2xl text-sm bg-secondary text-secondary-foreground rounded-tl-none flex gap-1">
                                        <span className="h-2 w-2 bg-primary rounded-full animate-bounce" />
                                        <span className="h-2 w-2 bg-primary rounded-full animate-bounce delay-75" />
                                        <span className="h-2 w-2 bg-primary rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my projects..."
                                    className="w-full bg-background border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 p-1.5 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 disabled:hover:text-muted-foreground"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
