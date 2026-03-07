export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    technologies: string[];
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
        role: "Frontend Developer & UI/UX Designer",
        description: "An AI-powered platform for analyzing and generating Indian classical music using raga theory and machine learning.",
        features: [
            "Real-time audio synthesis",
            "Interactive raga visualization",
            "Music pattern analysis",
            "AI-assisted generation"
        ],
        technologies: ["Python", "JavaScript", "Node.js", "Web Audio API", "Gemini API"],
    },
    {
        slug: "she-shield",
        title: "She Shield",
        tagline: "Women's Safety Wearable",
        role: "PCB Designer & Embedded Developer",
        description: "A compact wearable safety device designed to provide emergency protection and location tracking.",
        features: [
            "BLE smartphone connectivity",
            "GPS location sharing",
            "Emergency SOS alerts",
            "Shock defense module",
            "Mobile app integration"
        ],
        technologies: ["PCB Design", "Embedded C++", "Bluetooth BLE", "MIT App Inventor", "Microcontrollers"],
    },
    {
        slug: "esp32-gps-tracker",
        title: "ESP32 GPS Tracker",
        tagline: "Real-time IoT tracking system",
        description: "Real-time IoT tracking system using ESP32 and cloud integration for precise location monitoring.",
        features: [
            "GPS location tracking",
            "HTML email alerts with map links",
            "Cloud dashboard integration",
            "Offline location storage",
            "WiFi auto reconnect"
        ],
        technologies: ["ESP32", "TinyGPS++", "GeoLinker Cloud", "LocationIQ API"],
    },
    {
        slug: "delta-iot",
        title: "Delta",
        tagline: "IoT Learning Platform",
        description: "Educational web platform explaining IoT systems including sensors, actuators, microcontrollers, and communication technologies.",
        features: [
            "IoT documentation",
            "Project showcase pages",
            "Community sharing platform"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "IoT Concepts"],
    },
    {
        slug: "campus-connect",
        title: "Campus Connect",
        tagline: "Student networking platform",
        description: "Student networking platform developed during a hackathon to connect students, clubs, and communities.",
        features: [
            "Student profiles",
            "Club communities",
            "Event announcements",
            "Study groups",
            "Project collaboration"
        ],
        technologies: ["Next.js", "React", "Node.js"],
    },
    {
        slug: "smart-blind-stick",
        title: "Smart Blind Stick",
        tagline: "Assistive IoT navigation device",
        description: "Assistive IoT device designed to help visually impaired people navigate safely.",
        features: [
            "Ultrasonic obstacle detection",
            "Vibration alerts",
            "Buzzer feedback",
            "GPS tracking",
            "Emergency messaging"
        ],
        technologies: ["Arduino", "Ultrasonic Sensors", "GPS", "GSM Module"],
    },
    {
        slug: "smart-agriculture",
        title: "Smart Agriculture Monitoring",
        tagline: "IoT environmental monitoring",
        description: "IoT-based system for monitoring agricultural environments using sensors.",
        features: [
            "Environmental monitoring",
            "Sensor-based automation",
            "Real-time alerts"
        ],
        technologies: ["ESP32", "IoT Sensors", "Cloud Dashboard"],
    }
];
