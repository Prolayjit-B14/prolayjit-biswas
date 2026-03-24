export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    problem?: string;
    solution?: string;
    architecture?: string;
    outcome?: string;
    impact?: string;
    features: string[];
    technologies: string[];
    category: "Software" | "Hardware" | "IoT" | "AI" | "VLSI" | "Embedded" | "PCB" | "CAD";
    date: string;
    role?: string;
    githubUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
    
    // Extended Case Study Fields
    overview?: string;
    systemArchitecture?: {
        sensorLayer?: string[];
        edgeLayer?: string[];
        communication?: string[];
        cloudLayer?: string[];
        frontend?: string[];
    };
    hardwareDesign?: {
        microcontroller: string;
        sensors: string;
        power: string;
        pcb: string;
        keyFeatures: string[];
    };
    softwareDesign?: {
        firmware: string;
        functions: string[];
        backend: string;
        frontend: string;
    };
    techStackDetailed?: {
        hardware?: string[];
        software?: string[];
        cloud?: string[];
        protocols?: string[];
    };
    gallery?: string[];
    challenges?: string[];
    learnings?: string[];
    futureImprovements?: string[];
    docUrl?: string; // e.g. Documentation PDF
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
        problem: "Classical music theory relies on complex microtones (shrutis) lacking modern digital analysis tools.",
        solution: "Engineered an AI platform utilizing Web Audio API to analyze frequencies natively.",
        architecture: "Web Audio API -> Next.js Backend -> Gemini LLM -> Real-time Visualization",
        outcome: "Empowers vocalists with exact shruti visualization in real-time.",
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
        category: "Embedded",
        date: "2024-03",
        role: "PCB Designer & Embedded Developer",
        description: "A compact wearable safety device designed to provide emergency protection and location tracking.",
        problem: "Existing safety devices are bulky and require continuous manual interaction during emergencies.",
        solution: "Designed a compact wearable PCB integrating BLE, GPS, and a defensive shock module.",
        architecture: "Custom PCB -> ESP32 Edge -> BLE -> MIT App Dashboard -> Live Location",
        outcome: "Single-touch SOS alerts and continuous live-location tracking deployed successfully.",
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
        problem: "Commercial GPS trackers enforce expensive monthly subscriptions and lock data into proprietary, closed ecosystems.",
        solution: "Built an open-source hardware tracker utilizing ESP32, TinyGPS++, and cloud webhooks for independent encrypted data logging.",
        impact: "Achieved sub-5 meter accuracy with 48+ hours of offline location buffering.",
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
        tagline: "ESP32 based smart agriculture monitoring system with real-time dashboard.",
        category: "IoT",
        date: "2023-07",
        description: "IoT-based system for monitoring agricultural environments using sensors and automating water pumps based on soil moisture levels.",
        
        // --- CASE STUDY SECTIONS ---
        overview: "This project focuses on solving inefficient irrigation. It combines embedded hardware and scalable cloud software to achieve automated monitoring. The system collects data from sensors, processes it at the edge, and displays insights through a cloud dashboard.",
        
        problem: "Farmers often lack real-time soil data which leads to:\n• inefficient irrigation\n• crop damage\n• manual monitoring effort\nNeed a low-cost automated monitoring system.",
        
        solution: "Designed an IoT-based monitoring system using ESP32 and cloud backend.\nWorkflow:\nSensors → ESP32 → MQTT → Server → Dashboard\nProvides real-time monitoring and alerts.",
        
        systemArchitecture: {
            sensorLayer: ["soil moisture sensor", "temperature sensor"],
            edgeLayer: ["ESP32 microcontroller"],
            communication: ["MQTT protocol"],
            cloudLayer: ["Node.js server", "Firebase database"],
            frontend: ["Next.js dashboard"]
        },
        
        hardwareDesign: {
            microcontroller: "ESP32",
            sensors: "soil moisture, temperature",
            power: "Li-ion battery",
            pcb: "PCB designed using KiCAD.",
            keyFeatures: ["low power consumption", "compact layout", "stable signal routing"]
        },
        
        softwareDesign: {
            firmware: "Firmware written in C++ using Arduino framework.",
            functions: ["sensor data collection", "MQTT communication", "data formatting JSON", "WiFi connection management"],
            backend: "Backend built with Node.js.",
            frontend: "Frontend dashboard created using Next.js."
        },
        
        techStackDetailed: {
            hardware: ["ESP32", "PCB (KiCAD)"],
            software: ["C++", "Node.js", "Next.js"],
            cloud: ["Firebase"],
            protocols: ["MQTT", "HTTP"]
        },
        
        features: [
            "Real-time sensor monitoring",
            "Cloud dashboard visualization",
            "Low-cost hardware design",
            "Modular architecture",
            "Scalable backend"
        ],
        
        outcome: "Real-time soil moisture insights scaling up to 40% water reduction.",
        impact: "Successfully built working prototype.\nAchieved:\nreal-time data update\nstable cloud communication\nresponsive dashboard\nLow BOM cost.",
        
        gallery: [
            "https://images.unsplash.com/photo-1592982537447-6f296d9b24e6?w=800&q=80",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
        ],
        
        challenges: [
            "WiFi stability issues",
            "sensor calibration tuning",
            "MQTT message handling",
            "power optimization"
        ],
        
        learnings: [
            "real-world IoT architecture",
            "hardware debugging",
            "cloud integration"
        ],
        
        futureImprovements: [
            "mobile app integration",
            "LoRa connectivity",
            "AI prediction model",
            "solar power support"
        ],
        
        technologies: ["ESP32", "MQTT", "Node.js", "Next.js"],
        githubUrl: "https://github.com/Prolayjit-B14",
        demoUrl: "#",
        docUrl: "#"
    },
    {
        slug: "fpga-32bit-alu",
        title: "32-Bit FPGA ALU",
        tagline: "High-speed Arithmetic Logic Unit",
        category: "VLSI",
        date: "2024-11",
        description: "A custom 32-bit Arithmetic Logic Unit engineered in Verilog, optimized for high-speed clock cycles on FPGA.",
        problem: "General purpose processors create performance bottlenecks for specific embedded mathematical operations.",
        solution: "Programmed a hardware-level 32-bit ALU utilizing behavioral Verilog and simulated strictly on testbenches.",
        architecture: "Verilog RTL -> Gate Level Netlist -> Xilinx Vivado -> FPGA Bitstream",
        outcome: "High performance parallel logic execution validated via exhaustive RTL simulation.",
        features: [
            "32-bit arithmetic processing",
            "Fast carry lookahead adder",
            "Gate-level optimizations",
            "Xilinx simulation"
        ],
        technologies: ["Verilog", "FPGA", "Vivado", "Digital Logic", "RTL"],
        githubUrl: "https://github.com/Prolayjit-B14",
    },
    {
        slug: "lora-mesh-network",
        title: "LoRa Mesh Sensor Network",
        tagline: "Long-range off-grid telemetry",
        category: "IoT",
        date: "2024-10",
        description: "A low-power, long-range mesh network utilizing LoRa modules for environmental data acquisition in remote areas without cellular coverage.",
        problem: "Remote ecological monitoring sensors lack connectivity infrastructure and drain battery rapidly on cellular networks.",
        solution: "Engineered a decentralized LoRa mesh topology nodes communicating with a central edge gateway.",
        architecture: "Sensor Nodes -> LoRa SX1278 -> Central Gateway -> AWS IoT Core",
        outcome: "Achieved 5km+ reliable telemetry transmission with 6-month battery life per edge node.",
        features: [
            "Decentralized mesh routing",
            "Low-power sleep cycles",
            "AWS IoT Core integration"
        ],
        technologies: ["LoRa SX1278", "ESP32", "C++", "AWS IoT Core"],
        githubUrl: "https://github.com/Prolayjit-B14",
    },
    {
        slug: "custom-esp32-dev-board",
        title: "Custom ESP32-S3 Dev Board",
        tagline: "High-density 4-layer PCB Design",
        category: "PCB",
        date: "2024-06",
        description: "A comprehensive custom development board built around the ESP32-S3 featuring built-in LiPo charging, USB-C PD, and exposed GPIOs.",
        problem: "Off-the-shelf ESP32 dev boards lack native battery charging and standard industrial connectors for rapid prototyping.",
        solution: "Designed and fabbed a custom 4-layer PCB integrating CP2102N, TP4056 charging, and secure boot hardware.",
        architecture: "Schematic Capture -> Component Selection -> 4-Layer Routing -> JLCPCB Fab",
        outcome: "Successfully brought up rev 1.0 boards with 100% functionality and strict impedance control constraints met.",
        features: [
            "4-layer impedance controlled PCB",
            "USB-C Power Delivery",
            "Integrated LiPo management",
            "Extensive ESD protection"
        ],
        technologies: ["KiCAD", "PCB Design", "SMT Assembly", "Hardware Bring-up"],
        githubUrl: "https://github.com/Prolayjit-B14",
    }
];
