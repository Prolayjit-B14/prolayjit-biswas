"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

// Bezier-based circuit path — creates a proper PCB trace layout
function CircuitLine({ start, end, color }: {
    start: [number, number, number];
    end: [number, number, number];
    color: string;
}) {
    const ref = useRef<THREE.Line>(null);

    const geometry = useMemo(() => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [start, end]);

    const material = useMemo(() => {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.25 });
    }, [color]);

    useEffect(() => {
        return () => {
            geometry.dispose();
            material.dispose();
        };
    }, [geometry, material]);

    return <primitive object={new THREE.Line(geometry, material)} />;
}

function CircuitGrid() {
    const groupRef = useRef<THREE.Group>(null);

    const lines: Array<{ start: [number, number, number]; end: [number, number, number] }> = useMemo(() => {
        const generated: Array<{ start: [number, number, number]; end: [number, number, number] }> = [];
        const rand = (n: number) => (Math.random() - 0.5) * n;

        for (let i = 0; i < 40; i++) {
            const x = rand(30);
            const y = rand(20);
            const z = -15 + rand(5);
            const dx = Math.random() > 0.5 ? rand(10) : 0;
            const dy = dx === 0 ? rand(10) : 0;

            generated.push({
                start: [x, y, z],
                end: [x + dx, y + dy, z],
            });
        }
        return generated;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
            groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.07) * 0.06;
        }
    });

    return (
        <group ref={groupRef}>
            {lines.map((l, i) => (
                <CircuitLine key={i} start={l.start} end={l.end} color="#4ade80" />
            ))}
        </group>
    );
}

export function CircuitBackground() {
    return (
        <div className="absolute inset-0 -z-20 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, powerPreference: "low-power" }}
                dpr={[1, 1.5]}
            >
                <color attach="background" args={["#030712"]} />
                <CircuitGrid />
            </Canvas>
        </div>
    );
}
