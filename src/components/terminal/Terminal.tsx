"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { commands } from "./Commands";
import { Terminal as TermIcon, ShieldAlert } from "lucide-react";

interface History {
    input: string;
    output: any;
    isError?: boolean;
}

export function Terminal() {
    const [history, setHistory] = useState<History[]>([
        { input: "systemctl status", output: "All systems operational. Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom whenever history changes
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    // Keep focus on input when clicking anywhere in terminal
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (!trimmedCmd) return;

        if (trimmedCmd === "clear") {
            setHistory([]);
            return;
        }

        const output = commands[trimmedCmd as keyof typeof commands];

        if (output) {
            setHistory((prev) => [...prev, { input: cmd, output }]);
        } else {
            setHistory((prev) => [...prev, {
                input: cmd,
                output: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
                isError: true
            }]);
        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleCommand(input);
            setInput("");
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f1c] font-mono text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#030712] border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <div className="h-3 w-3 rounded-full bg-[#eab308] shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    <div className="h-3 w-3 rounded-full bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-[#94a3b8] text-xs font-semibold tracking-wider uppercase">
                    <TermIcon className="h-3.5 w-3.5" />
                    Terminal — guest@prolayjit-lab
                </div>
            </div>

            {/* Terminal Body */}
            <div
                className="p-4 sm:p-6 h-[500px] overflow-y-auto custom-scrollbar cursor-text"
                onClick={handleTerminalClick}
            >
                <div className="text-primary mb-8 leading-relaxed">
                    Welcome to the Interactive Developer Terminal.<br />
                    Type <span className="text-[#f8fafc] font-bold">'help'</span> to see available commands.
                </div>

                <div className="space-y-6">
                    {history.map((entry, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            {/* Input Line */}
                            <div className="flex items-center gap-2 font-medium">
                                <span className="text-[#22c55e]">guest@prolayjit</span>
                                <span className="text-[#f8fafc]">:</span>
                                <span className="text-[#3b82f6]">~</span>
                                <span className="text-[#f8fafc]">$</span>
                                <span className="text-[#f8fafc] ml-1">{entry.input}</span>
                            </div>

                            {/* Output Block */}
                            <div className={`whitespace-pre-wrap ml-[5.5rem] leading-relaxed ${entry.isError ? "text-[#ef4444] flex items-start gap-2" : "text-[#cbd5e1]"}`}>
                                {entry.isError && <ShieldAlert className="h-4 w-4 mt-1 flex-shrink-0" />}
                                <div>{entry.output}</div>
                            </div>
                        </div>
                    ))}

                    {/* Active Input Line */}
                    <div className="flex items-center gap-2 font-medium mt-4">
                        <span className="text-[#22c55e]">guest@prolayjit</span>
                        <span className="text-[#f8fafc]">:</span>
                        <span className="text-[#3b82f6]">~</span>
                        <span className="text-[#f8fafc]">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-[#f8fafc] focus:ring-0 p-0 ml-1"
                            autoFocus
                            spellCheck={false}
                        />
                    </div>
                    {/* Anchor for auto-scrolling */}
                    <div ref={endRef} className="h-4" />
                </div>
            </div>
        </div>
    );
}
