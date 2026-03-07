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

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (!trimmedCmd) return;

        if (trimmedCmd === "clear") {
            setHistory([]);
            return;
        }

        const output = commands[trimmedCmd];

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
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] font-mono text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-muted-foreground text-xs font-medium">
                    <TermIcon className="h-3 w-3" />
                    guest@prolayjit-lab: ~
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 h-[500px] overflow-y-auto">
                <div className="text-primary mb-6">
                    Welcome to the Interactive Developer Terminal.<br />
                    Type <span className="text-white">'help'</span> to see available commands.
                </div>

                {history.map((entry, i) => (
                    <div key={i} className="mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <span className="text-green-500">guest@prolayjit</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                            <span className="text-white ml-1">{entry.input}</span>
                        </div>
                        <div className={`whitespace-pre-wrap ml-2 ${entry.isError ? "text-red-400 flex items-start gap-2" : "text-gray-300"}`}>
                            {entry.isError && <ShieldAlert className="h-4 w-4 mt-0.5" />}
                            <div>{entry.output}</div>
                        </div>
                    </div>
                ))}

                <div className="flex items-center gap-2 text-muted-foreground mt-4">
                    <span className="text-green-500">guest@prolayjit</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 ml-1"
                        autoFocus
                        spellCheck={false}
                    />
                </div>
                <div ref={endRef} />
            </div>
        </div>
    );
}
