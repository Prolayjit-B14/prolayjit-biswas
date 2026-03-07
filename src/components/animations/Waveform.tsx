"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const NEON_GREEN = new THREE.Color("#4ade80");

function WaveScene() {
    const lineRef = useRef<THREE.Line>(null);
    const pointsCount = 120;

    const geometry = useMemo(() => {
        const positions = new Float32Array(pointsCount * 3);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [pointsCount]);

    const material = useMemo(() => {
        return new THREE.LineBasicMaterial({ color: NEON_GREEN, transparent: true, opacity: 0.5 });
    }, []);

    useEffect(() => {
        return () => {
            geometry.dispose();
            material.dispose();
        };
    }, [geometry, material]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const positions = geometry.attributes.position;
        for (let i = 0; i < pointsCount; i++) {
            const x = (i / pointsCount) * 10 - 5;
            const y = Math.sin(x * 2.5 + time * 2.0) * Math.cos(time * 0.4) * 1.2;
            positions.setXYZ(i, x, y, 0);
        }
        positions.needsUpdate = true;
    });

    return (
        <primitive
            ref={lineRef}
            object={new THREE.Line(geometry, material)}
        />
    );
}

export function Waveform() {
    return (
        <div className="w-full h-28 absolute bottom-0 left-0 -z-10 opacity-40 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: false, powerPreference: "low-power" }}
                dpr={[1, 1.5]}
            >
                <WaveScene />
            </Canvas>
        </div>
    );
}
