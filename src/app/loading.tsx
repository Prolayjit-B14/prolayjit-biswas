export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background fixed inset-0 z-50">
            <div className="flex flex-col items-center gap-6">
                <div className="relative flex items-center justify-center">
                    {/* Outer glowing ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 blur-xl w-16 h-16 animate-pulse" />
                    
                    {/* Spinning ring */}
                    <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                    
                    {/* Inner core */}
                    <div className="absolute w-2 h-2 rounded-full bg-primary" />
                </div>
                
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-mono text-primary font-medium uppercase tracking-widest">
                        Initializing
                    </p>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
