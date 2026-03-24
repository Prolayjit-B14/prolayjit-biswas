"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTED_QUESTIONS = [
    "What projects have you built?",
    "What is your tech stack?",
    "Are you open to work?",
    "Tell me about She Shield",
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Prolayjit's AI assistant. Ask me about his skills, projects, or hardware experience — or pick a question below 👇" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const showSuggestions = messages.length === 1; // only on first message

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
    }, [isOpen]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;
        const userMessage = text.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: messages.concat({ role: "user", content: userMessage }).slice(-6)
                })
            });

            const data = await res.json();
            setMessages((prev) => [...prev, {
                role: "assistant",
                content: data.message ?? "Sorry, something went wrong. Try again!"
            }]);
        } catch {
            setMessages((prev) => [...prev, {
                role: "assistant",
                content: "Sorry, my circuits crossed — something went wrong. Email prolayjitbiswas14112004@gmail.com directly!"
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open AI chat assistant"
                className={cn(
                    "fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] z-50",
                    isOpen ? "scale-0 pointer-events-none" : "scale-100"
                )}
            >
                <MessageSquare className="h-6 w-6" />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog"
                        aria-label="AI chat assistant"
                        aria-modal="true"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 w-[360px] h-[520px] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Bot className="h-5 w-5 text-primary" />
                                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
                                </div>
                                <span className="font-semibold text-glow">AI Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-white/5"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite">
                            {messages.map((msg, i) => (
                                <div
                                    key={`${msg.role}-${i}-${msg.content.slice(0, 12)}`}
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
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm leading-relaxed",
                                        msg.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-secondary text-secondary-foreground rounded-tl-none"
                                    )}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {/* Suggested questions — shown only before first user message */}
                            {showSuggestions && !isLoading && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {SUGGESTED_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => sendMessage(q)}
                                            className="text-xs border border-primary/30 bg-primary/10 text-primary rounded-full px-3 py-1.5 hover:bg-primary/20 transition-colors text-left"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Loading dots */}
                            {isLoading && (
                                <div className="flex gap-3 max-w-[85%] mr-auto">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 flex-shrink-0 mt-1">
                                        <Bot className="h-3 w-3 text-primary" />
                                    </div>
                                    <div className="p-3 rounded-2xl text-sm bg-secondary text-secondary-foreground rounded-tl-none flex gap-1 items-center">
                                        <span className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" />
                                        <span className="h-2 w-2 bg-primary/60 rounded-full animate-bounce [animation-delay:150ms]" />
                                        <span className="h-2 w-2 bg-primary/60 rounded-full animate-bounce [animation-delay:300ms]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative flex items-center">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my projects..."
                                    maxLength={500}
                                    className="w-full bg-background border border-white/10 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    aria-label="Send message"
                                    className="absolute right-2 p-1.5 text-muted-foreground hover:text-primary transition-colors disabled:opacity-40 disabled:pointer-events-none"
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
