"use client";

import * as THREE from "three";
import styles from "../page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Orbit() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{
          position: [0, 0, 35],
        }}
      >
        <OrbitControls />;
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* orbit */}
        <MainSide />
      </Canvas>
    </div>
  );
}

function MainSide() {
  return (
    <>
      <Square x={-8} y={4} color="#D288FF" />
      <Square x={-6} y={4} color="#D288FF" />
      <Square x={0} y={4} color="#D288FF" />
      <Square x={2} y={4} color="#D288FF" />

      <Square x={-11} y={2} color="#05E6FA" />
      <Square x={-9} y={2} color="#05E6FA" />
      <Square x={-7} y={2} color="#05E6FA" />
      <Square x={-5} y={2} color="#05E6FA" />
      <Square x={-3} y={2} color="#05E6FA" />
      <Square x={-1} y={2} color="#D288FF" />
      <Square x={1} y={2} color="#D288FF" />
      <Square x={3} y={2} color="#05E6FA" />
      <Square x={5} y={2} color="#05E6FA" />

      <Square x={8} y={0} color="#D288FF" />
      <Square x={6} y={0} color="#05E6FA" />
      <Square x={4} y={0} color="#05E6FA" />
      <Square x={2} y={0} color="#D288FF" />
      <Square x={0} y={0} color="#05E6FA" />
      <Square x={-2} y={0} color="#05E6FA" />
      <Square x={-4} y={0} color="#05E6FA" />
      <Square x={-6} y={0} color="#05E6FA" />
      <Square x={-8} y={0} color="#05E6FA" />
      <Square x={-10} y={0} color="#05E6FA" />
      <Square x={-12} y={0} color="#05E6FA" />
      <Square x={-14} y={0} color="#D288FF" />

      <Square x={-15} y={-2} color="#D288FF" />
      <Square x={-13} y={-2} color="#D288FF" />
      <Square x={-11} y={-2} color="#D288FF" />
      <Square x={-9} y={-2} color="#D288FF" />
      <Square x={-7} y={-2} color="#D288FF" />
      <Square x={-5} y={-2} color="#05E6FA" />
      <Square x={-3} y={-2} color="#05E6FA" />
      <Square x={-1} y={-2} color="#05E6FA" />
      <Square x={1} y={-2} color="#05E6FA" />
      <Square x={3} y={-2} color="#D288FF" />
      <Square x={5} y={-2} color="#05E6FA" />
      <Square x={7} y={-2} color="#05E6FA" />
      <Square x={9} y={-2} color="#D288FF" />

      <Square x={-14} y={-4} color="#D288FF" />
      <Square x={-12} y={-4} color="#05E6FA" />
      <Square x={-10} y={-4} color="#05E6FA" />
      <Square x={-8} y={-4} color="#D288FF" />
      <Square x={-6} y={-4} color="#D288FF" />
      <Square x={-4} y={-4} color="#D288FF" />
      <Square x={-2} y={-4} color="#05E6FA" />
      <Square x={0} y={-4} color="#05E6FA" />
      <Square x={2} y={-4} color="#D288FF" />
      <Square x={4} y={-4} color="#D288FF" />
      <Square x={6} y={-4} color="#05E6FA" />
      <Square x={8} y={-4} color="#05E6FA" />

      <Square x={-15} y={-6} color="#05E6FA" />
      <Square x={-13} y={-6} color="#05E6FA" />
      <Square x={-11} y={-6} color="#05E6FA" />
      <Square x={-9} y={-6} color="#05E6FA" />
      <Square x={-7} y={-6} color="#05E6FA" />
      <Square x={-5} y={-6} color="#D288FF" />
      <Square x={-3} y={-6} color="#D288FF" />
      <Square x={-1} y={-6} color="#05E6FA" />
      <Square x={1} y={-6} color="#05E6FA" />
      <Square x={3} y={-6} color="#D288FF" />
      <Square x={5} y={-6} color="#05E6FA" />
      <Square x={7} y={-6} color="#05E6FA" />
      <Square x={9} y={-6} color="#05E6FA" />

      <Square x={-18} y={-8} color="#D288FF" />
      <Square x={-16} y={-8} color="#05E6FA" />
      <Square x={-14} y={-8} color="#05E6FA" />
      <Square x={-12} y={-8} color="#05E6FA" />
      <Square x={-10} y={-8} color="#05E6FA" />
      <Square x={-8} y={-8} color="#05E6FA" />
      <Square x={-6} y={-8} color="#05E6FA" />
      <Square x={-4} y={-8} color="#05E6FA" />
      <Square x={-2} y={-8} color="#D288FF" />
      <Square x={0} y={-8} color="#05E6FA" />
      <Square x={2} y={-8} color="#D288FF" />
      <Square x={4} y={-8} color="#D288FF" />
      <Square x={6} y={-8} color="#05E6FA" />
      <Square x={8} y={-8} color="#05E6FA" />
      <Square x={10} y={-8} color="#D288FF" />
      <Square x={12} y={-8} color="#D288FF" />

      <Square x={-19} y={-10} color="#D288FF" />
      <Square x={-17} y={-10} color="#05E6FA" />
      <Square x={-15} y={-10} color="#05E6FA" />
      <Square x={-13} y={-10} color="#05E6FA" />
      <Square x={-11} y={-10} color="#D288FF" />
      <Square x={-9} y={-10} color="#D288FF" />
      <Square x={-7} y={-10} color="#D288FF" />
      <Square x={-5} y={-10} color="#D288FF" />
      <Square x={-3} y={-10} color="#05E6FA" />
      <Square x={-1} y={-10} color="#D288FF" />
      <Square x={1} y={-10} color="#05E6FA" />
      <Square x={3} y={-10} color="#D288FF" />
      <Square x={5} y={-10} color="#05E6FA" />
      <Square x={7} y={-10} color="#05E6FA" />
      <Square x={9} y={-10} color="#05E6FA" />
      <Square x={11} y={-10} color="#D288FF" />
      <Square x={13} y={-10} color="#D288FF" />

      <Square x={-18} y={-12} color="#05E6FA" />
      <Square x={-16} y={-12} color="#05E6FA" />
      <Square x={-14} y={-12} color="#D288FF" />
      <Square x={-12} y={-12} color="#D288FF" />
      <Square x={-10} y={-12} color="#D288FF" />
      <Square x={-8} y={-12} color="#05E6FA" />
      <Square x={-6} y={-12} color="#05E6FA" />
      <Square x={-4} y={-12} color="#D288FF" />
      <Square x={-2} y={-12} color="#D288FF" />
      <Square x={0} y={-12} color="#05E6FA" />
      <Square x={2} y={-12} color="#D288FF" />
      <Square x={4} y={-12} color="#05E6FA" />
      <Square x={6} y={-12} color="#05E6FA" />
      <Square x={8} y={-12} color="#05E6FA" />
      <Square x={10} y={-12} color="#D288FF" />
      <Square x={12} y={-12} color="#05E6FA" />

      <Square x={-19} y={-14} color="#05E6FA" />
      <Square x={-17} y={-14} color="#05E6FA" />
      <Square x={-15} y={-14} color="#D288FF" />
      <Square x={-13} y={-14} color="#D288FF" />
      <Square x={-11} y={-14} color="#05E6FA" />
      <Square x={-9} y={-14} color="#05E6FA" />
      <Square x={-7} y={-14} color="#D288FF" />
      <Square x={-5} y={-14} color="#D288FF" />
      <Square x={-3} y={-14} color="#D288FF" />
      <Square x={-1} y={-14} color="#D288FF" />
      <Square x={1} y={-14} color="#D288FF" />
      <Square x={3} y={-14} color="#05E6FA" />
      <Square x={5} y={-14} color="#05E6FA" />
      <Square x={7} y={-14} color="#D288FF" />
      <Square x={9} y={-14} color="#D288FF" />
      <Square x={11} y={-14} color="#05E6FA" />
      <Square x={13} y={-14} color="#05E6FA" />

      <Square x={-18} y={-16} color="#05E6FA" />
      <Square x={-16} y={-16} color="#D288FF" />
      <Square x={-14} y={-16} color="#05E6FA" />
      <Square x={-12} y={-16} color="#05E6FA" />
      <Square x={-10} y={-16} color="#05E6FA" />
      <Square x={-8} y={-16} color="#D288FF" />
      <Square x={-6} y={-16} color="#05E6FA" />
      <Square x={-4} y={-16} color="#D288FF" />
      <Square x={-2} y={-16} color="#D288FF" />
      <Square x={0} y={-16} color="#05E6FA" />
      <Square x={2} y={-16} color="#05E6FA" />
      <Square x={4} y={-16} color="#D288FF" />
      <Square x={6} y={-16} color="#D288FF" />
      <Square x={8} y={-16} color="#D288FF" />
      <Square x={10} y={-16} color="#05E6FA" />
      <Square x={12} y={-16} color="#05E6FA" />

      <Square x={-19} y={-18} color="#D288FF" />
      <Square x={-17} y={-18} color="#D288FF" />
      <Square x={-15} y={-18} color="#05E6FA" />
      <Square x={-13} y={-18} color="#05E6FA" />
      <Square x={-11} y={-18} color="#05E6FA" />
      <Square x={-9} y={-18} color="#D288FF" />
      <Square x={-7} y={-18} color="#05E6FA" />
      <Square x={-5} y={-18} color="#D288FF" />
      <Square x={-3} y={-18} color="#05E6FA" />
      <Square x={-1} y={-18} color="#D288FF" />
      <Square x={1} y={-18} color="#D288FF" />
      <Square x={3} y={-18} color="#D288FF" />
      <Square x={5} y={-18} color="#D288FF" />
      <Square x={7} y={-18} color="#05E6FA" />
      <Square x={9} y={-18} color="#05E6FA" />
      <Square x={11} y={-18} color="#05E6FA" />
      <Square x={13} y={-18} color="#D288FF" />

      <Square x={-18} y={-20} color="#D288FF" />
      <Square x={-16} y={-20} color="#D288FF" />
      <Square x={-14} y={-20} color="#05E6FA" />
      <Square x={-12} y={-20} color="#05E6FA" />
      <Square x={-10} y={-20} color="#D288FF" />
      <Square x={-8} y={-20} color="#D288FF" />
      <Square x={-6} y={-20} color="#05E6FA" />
      <Square x={-4} y={-20} color="#D288FF" />
      <Square x={-2} y={-20} color="#05E6FA" />
      <Square x={0} y={-20} color="#05E6FA" />
      <Square x={2} y={-20} color="#05E6FA" />
      <Square x={4} y={-20} color="#05E6FA" />
      <Square x={6} y={-20} color="#05E6FA" />
      <Square x={8} y={-20} color="#05E6FA" />
      <Square x={10} y={-20} color="#05E6FA" />
      <Square x={12} y={-20} color="#D288FF" />

      <Square x={-15} y={-22} color="#05E6FA" />
      <Square x={-13} y={-22} color="#05E6FA" />
      <Square x={-11} y={-22} color="#05E6FA" />
      <Square x={-9} y={-22} color="#D288FF" />
      <Square x={-7} y={-22} color="#05E6FA" />
      <Square x={-5} y={-22} color="#05E6FA" />
      <Square x={-3} y={-22} color="#D288FF" />
      <Square x={-1} y={-22} color="#D288FF" />
      <Square x={1} y={-22} color="#05E6FA" />
      <Square x={3} y={-22} color="#05E6FA" />
      <Square x={5} y={-22} color="#05E6FA" />
      <Square x={7} y={-22} color="#05E6FA" />
      <Square x={9} y={-22} color="#05E6FA" />

      <Square x={-14} y={-24} color="#05E6FA" />
      <Square x={-12} y={-24} color="#05E6FA" />
      <Square x={-10} y={-24} color="#D288FF" />
      <Square x={-8} y={-24} color="#D288FF" />
      <Square x={-6} y={-24} color="#05E6FA" />
      <Square x={-4} y={-24} color="#05E6FA" />
      <Square x={-2} y={-24} color="#D288FF" />
      <Square x={0} y={-24} color="#D288FF" />
      <Square x={2} y={-24} color="#D288FF" />
      <Square x={4} y={-24} color="#05E6FA" />
      <Square x={6} y={-24} color="#05E6FA" />
      <Square x={8} y={-24} color="#D288FF" />

      <Square x={-15} y={-26} color="#D288FF" />
      <Square x={-13} y={-26} color="#05E6FA" />
      <Square x={-11} y={-26} color="#05E6FA" />
      <Square x={-9} y={-26} color="#D288FF" />
      <Square x={-7} y={-26} color="#05E6FA" />
      <Square x={-5} y={-26} color="#05E6FA" />
      <Square x={-3} y={-26} color="#05E6FA" />
      <Square x={-1} y={-26} color="#05E6FA" />
      <Square x={1} y={-26} color="#D288FF" />
      <Square x={3} y={-26} color="#D288FF" />
      <Square x={5} y={-26} color="#D288FF" />
      <Square x={7} y={-26} color="#D288FF" />
      <Square x={9} y={-26} color="#D288FF" />

      <Square x={-14} y={-28} color="#D288FF" />
      <Square x={-12} y={-28} color="#05E6FA" />
      <Square x={-10} y={-28} color="#05E6FA" />
      <Square x={-8} y={-28} color="#D288FF" />
      <Square x={-6} y={-28} color="#05E6FA" />
      <Square x={-4} y={-28} color="#05E6FA" />
      <Square x={-2} y={-28} color="#05E6FA" />
      <Square x={0} y={-28} color="#05E6FA" />
      <Square x={2} y={-28} color="#05E6FA" />
      <Square x={4} y={-28} color="#05E6FA" />
      <Square x={6} y={-28} color="#05E6FA" />
      <Square x={8} y={-28} color="#D288FF" />

      <Square x={-11} y={-30} color="#05E6FA" />
      <Square x={-9} y={-30} color="#05E6FA" />
      <Square x={-7} y={-30} color="#D288FF" />
      <Square x={-5} y={-30} color="#D288FF" />
      <Square x={-3} y={-30} color="#05E6FA" />
      <Square x={-1} y={-30} color="#05E6FA" />
      <Square x={1} y={-30} color="#05E6FA" />
      <Square x={3} y={-30} color="#05E6FA" />
      <Square x={5} y={-30} color="#05E6FA" />

      <Square x={-8} y={-32} color="#D288FF" />
      <Square x={-6} y={-32} color="#D288FF" />

      <Square x={0} y={-32} color="#D288FF" />
      <Square x={2} y={-32} color="#D288FF" />
    </>
  );
}

function Square({ x, y, color }: { x: number; y: number; color: string }) {
  const positionArray: [x: number, y: number, z: number] = [x, y, 0];

  return (
    <>
      <mesh position={positionArray}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} />

        <lineSegments>
          <edgesGeometry
            attach="geometry"
            args={[new THREE.BoxGeometry(2, 2, 2)]}
          />
          <lineBasicMaterial attach="material" color="black" />
        </lineSegments>
      </mesh>
    </>
  );
}
