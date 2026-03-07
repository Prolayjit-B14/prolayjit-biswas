"use client";

import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function PCBMesh() {
    const groupRef = useRef<THREE.Group>(null);

    // FR4 board material (green PCB)
    const boardMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#0a5e20", metalness: 0.4, roughness: 0.6 }), []);
    const chipMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#101010", metalness: 0.8, roughness: 0.2 }), []);
    const capMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#a07020", metalness: 0.5, roughness: 0.4 }), []);
    const smdMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#f0f0f0", metalness: 0.9, roughness: 0.1 }), []);
    const traceMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#c8a000", metalness: 1, roughness: 0.05 }), []);

    useEffect(() => {
        return () => {
            [boardMat, chipMat, capMat, smdMat, traceMat].forEach((m) => m.dispose());
        };
    }, [boardMat, chipMat, capMat, smdMat, traceMat]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        }
    });

    const components = [
        // [x, y, z, w, h, d, mat]
        { pos: [-1.2, 0.18, 0], size: [0.6, 0.24, 0.5], mat: chipMat },
        { pos: [0.2, 0.16, 0.4], size: [0.8, 0.2, 0.45], mat: chipMat },
        { pos: [1.4, 0.15, -0.5], size: [0.35, 0.18, 0.35], mat: chipMat },
        { pos: [-0.4, 0.12, -0.8], size: [0.14, 0.22, 0.14], mat: capMat },
        { pos: [0.8, 0.12, 0.9], size: [0.14, 0.22, 0.14], mat: capMat },
        { pos: [-1.5, 0.1, 0.7], size: [0.18, 0.08, 0.08], mat: smdMat },
        { pos: [0.5, 0.1, -1.0], size: [0.18, 0.08, 0.08], mat: smdMat },
    ];

    const traces = [
        { pos: [0, 0.08, 0], size: [3.8, 0.012, 0.06] },
        { pos: [0, 0.08, 0.5], size: [3.0, 0.012, 0.06] },
        { pos: [-1.0, 0.08, 0], size: [0.06, 0.012, 1.5] },
        { pos: [1.0, 0.08, 0.2], size: [0.06, 0.012, 1.2] },
    ];

    return (
        <group ref={groupRef}>
            {/* PCB board */}
            <mesh material={boardMat} position={[0, 0, 0]}>
                <boxGeometry args={[4, 0.15, 3]} />
            </mesh>

            {/* Copper traces */}
            {traces.map((t, i) => (
                <mesh key={i} material={traceMat} position={t.pos as [number, number, number]}>
                    <boxGeometry args={t.size as [number, number, number]} />
                </mesh>
            ))}

            {/* Components */}
            {components.map((c, i) => (
                <mesh key={`comp-${i}`} material={c.mat} position={c.pos as [number, number, number]}>
                    <boxGeometry args={c.size as [number, number, number]} />
                </mesh>
            ))}
        </group>
    );
}

export function PCBViewer() {
    return (
        <div className="relative w-full h-[420px] rounded-2xl bg-black/60 border border-white/10 overflow-hidden cursor-grab active:cursor-grabbing">
            <Canvas
                camera={{ position: [0, 6, 6], fov: 40 }}
                gl={{ antialias: true, powerPreference: "default" }}
                shadows
                dpr={[1, 2]}
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[8, 8, 4]} intensity={2.5} castShadow />
                <pointLight position={[-5, 5, 5]} intensity={1} color="#4ade80" />
                <pointLight position={[5, -2, -5]} intensity={0.5} color="#60a5fa" />
                <PCBMesh />
                <OrbitControls
                    enableZoom
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.6}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2.2}
                />
            </Canvas>

            {/* Overlay hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
                <span className="rounded-full border border-white/10 bg-black/60 backdrop-blur px-3 py-1 text-xs font-mono text-muted-foreground tracking-widest">
                    DRAG · ZOOM · ROTATE
                </span>
            </div>
        </div>
    );
}
