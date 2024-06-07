"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Model } from "./Model";



export function Scene( { args } ) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-100, -100, -100] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <Model args={ args } />
          <OrbitControls />
        </Suspense>
      </Canvas>

    </div>
  );
}
