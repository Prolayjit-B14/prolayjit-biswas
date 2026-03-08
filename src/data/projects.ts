export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    technologies: string[];
    category: "Software" | "Hardware" | "IoT" | "AI";
    date: string;
    role?: string;
    githubUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "sargamai",
        title: "SargamAI",
        tagline: "AI Platform for Indian Classical Music",
        category: "AI",
        date: "2024-08",
        role: "Frontend Developer & UI/UX Designer",
        description: "An AI-powered platform for analyzing and generating Indian classical music using raga theory and machine learning.",
        features: [
            "Real-time audio synthesis",
            "Interactive raga visualization",
            "Music pattern analysis",
            "AI-assisted generation"
        ],
        technologies: ["Python", "JavaScript", "Node.js", "Web Audio API", "Gemini API"],
        githubUrl: "https://github.com/Prolayjit-B14",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    },
    {
        slug: "she-shield",
        title: "She Shield",
        tagline: "Women's Safety Wearable",
        category: "Hardware",
        date: "2024-03",
        role: "PCB Designer & Embedded Developer",
        description: "A compact wearable safety device designed to provide emergency protection and location tracking.",
        features: [
            "BLE smartphone connectivity",
            "GPS location sharing",
            "Emergency SOS alerts",
            "Shock defense module"
        ],
        technologies: ["PCB Design", "Embedded C++", "Bluetooth BLE", "MIT App Inventor"],
        githubUrl: "https://github.com/Prolayjit-B14",
        imageUrl: "https://images.unsplash.com/photo-1598327105655-bfa766547144?w=800&q=80",
    },
    {
        slug: "esp32-gps-tracker",
        title: "ESP32 GPS Tracker",
        tagline: "Real-time IoT tracking system",
        category: "IoT",
        date: "2023-11",
        description: "Real-time IoT tracking system using ESP32 and cloud integration for precise location monitoring.",
        features: [
            "GPS location tracking",
            "HTML email alerts with map links",
            "Cloud dashboard integration",
            "Offline location storage"
        ],
        technologies: ["ESP32", "TinyGPS++", "GeoLinker Cloud", "LocationIQ API"],
        githubUrl: "https://github.com/Prolayjit-B14",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
        slug: "delta-iot",
        title: "Delta",
        tagline: "IoT Learning Platform",
        category: "Software",
        date: "2023-09",
        description: "Educational web platform explaining IoT systems including sensors, actuators, microcontrollers, and communication technologies.",
        features: [
            "IoT documentation",
            "Project showcase pages",
            "Community sharing platform"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "IoT Concepts"],
        githubUrl: "https://github.com/Prolayjit-B14",
        demoUrl: "https://example.com",
    },
    {
        slug: "campus-connect",
        title: "Campus Connect",
        tagline: "Student networking platform",
        category: "Software",
        date: "2024-01",
        description: "Student networking platform developed during a hackathon to connect students, clubs, and communities.",
        features: [
            "Student profiles",
            "Club communities",
            "Event announcements",
            "Study groups"
        ],
        technologies: ["Next.js", "React", "Node.js"],
        githubUrl: "https://github.com/Prolayjit-B14",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
        slug: "smart-blind-stick",
        title: "Smart Blind Stick",
        tagline: "Assistive IoT navigation device",
        category: "Hardware",
        date: "2023-05",
        description: "Assistive IoT device designed to help visually impaired people navigate safely using ultrasonic sensors and GPS feedback.",
        features: [
            "Ultrasonic obstacle detection",
            "Vibration alerts",
            "Buzzer feedback",
            "Emergency messaging"
        ],
        technologies: ["Arduino", "Ultrasonic Sensors", "GPS", "GSM Module"],
        githubUrl: "https://github.com/Prolayjit-B14",
        imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    },
    {
        slug: "smart-agriculture",
        title: "Smart Agriculture Monitoring",
        tagline: "IoT environmental monitoring",
        category: "IoT",
        date: "2023-07",
        description: "IoT-based system for monitoring agricultural environments using sensors and automating water pumps based on soil moisture levels.",
        features: [
            "Environmental monitoring",
            "Sensor-based automation",
            "Real-time alerts"
        ],
        technologies: ["ESP32", "IoT Sensors", "Cloud Dashboard"],
        githubUrl: "https://github.com/Prolayjit-B14",
    }
];
