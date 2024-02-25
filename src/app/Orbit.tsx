import * as THREE from "three";
import styles from "./page.module.css";
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
