export interface Hackathon {
    slug: string;
    name: string;
    role: string;
    date: string;
    organizer: string;
    project: string;
    description: string;
    technologies: string[];
    awards?: string[];
    link?: string;
    imageUrl?: string;
}

export const hackathons: Hackathon[] = [
    {
        slug: "smart-india-hackathon-2024",
        name: "Smart India Hackathon (SIH) 2024",
        role: "Hardware Lead / Embedded Developer",
        date: "August 2024",
        organizer: "Ministry of Education, Govt. of India",
        project: "She Shield",
        description: "Built a compact wearable safety device to provide emergency protection and tracking for women. Handled the complete circuit design and integration of BLE, GPS, and shock modules.",
        technologies: ["ESP32", "C++", "PCB Design", "GPS", "BLE", "MIT App Inventor"],
        awards: ["National Level Participant", "Top 10 in Nodal Center"],
        imageUrl: "https://images.unsplash.com/photo-1598327105655-bfa766547144?w=800&q=80",
    },
    {
        slug: "campus-connect-hack",
        name: "Campus Connect Hackathon",
        role: "Full-Stack Developer",
        date: "January 2024",
        organizer: "MAKAUT University",
        project: "Campus Connect",
        description: "Developed a comprehensive student networking platform to bridge the gap between clubs, communities, and study groups.",
        technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
        awards: ["Runner Up", "Best UI/UX Design"],
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    }
];
