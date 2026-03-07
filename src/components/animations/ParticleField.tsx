"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

interface ParticleProps {
    count?: number;
}

function ParticleCloud({ count = 2500 }: ParticleProps) {
    const ref = useRef<THREE.Points>(null);

    const { positions, geometry, material } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 12;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: new THREE.Color("#4ade80"),
            size: 0.018,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        return { positions, geometry, material };
    }, [count]);

    useEffect(() => {
        return () => {
            geometry.dispose();
            material.dispose();
        };
    }, [geometry, material]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.08;
            ref.current.rotation.y -= delta * 0.055;
            ref.current.rotation.z += delta * 0.02;
        }
    });

    return (
        <points ref={ref} geometry={geometry} material={material} />
    );
}

export function ParticleField() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                gl={{ antialias: false, powerPreference: "low-power" }}
                dpr={[1, 1.5]}
            >
                <ParticleCloud count={2500} />
            </Canvas>
        </div>
    );
}
