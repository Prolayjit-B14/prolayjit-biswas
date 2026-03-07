import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS-based configuration via @theme in globals.css.
// This file exists for tooling compatibility (IntelliSense, etc.)
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
};

export default config;
