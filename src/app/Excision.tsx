import * as THREE from "three";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

export default function Excision() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{
          position: [0, 0, 35],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* outline */}
        <Square x={0} y={0} color="gray" />
        <Square x={2} y={0} color="gray" />
        <Square x={4} y={-2} color="gray" />
        <Square x={6} y={-4} color="gray" />
        <Square x={8} y={-2} color="gray" />
        <Square x={10} y={0} color="gray" />
        <Square x={12} y={0} color="gray" />
        <Square x={12} y={-2} color="gray" />
        <Square x={12} y={-4} color="gray" />
        <Square x={10} y={-6} color="gray" />
        <Square x={8} y={-8} color="gray" />
        <Square x={10} y={-10} color="gray" />
        <Square x={12} y={-12} color="gray" />
        <Square x={12} y={-14} color="gray" />
        <Square x={12} y={-16} color="gray" />
        <Square x={10} y={-18} color="gray" />
        <Square x={8} y={-20} color="gray" />
        <Square x={8} y={-18} color="gray" />
        <Square x={8} y={-16} color="gray" />
        <Square x={8} y={-14} color="gray" />
        <Square x={6} y={-12} color="gray" />
        <Square x={4} y={-14} color="gray" />
        <Square x={4} y={-16} color="gray" />
        <Square x={4} y={-18} color="gray" />
        <Square x={4} y={-20} color="gray" />
        <Square x={4} y={-22} color="gray" />
        <Square x={2} y={-20} color="gray" />
        <Square x={0} y={-18} color="gray" />
        <Square x={0} y={-16} color="gray" />
        <Square x={0} y={-14} color="gray" />
        <Square x={0} y={-12} color="gray" />
        <Square x={2} y={-10} color="gray" />
        <Square x={4} y={-8} color="gray" />
        <Square x={2} y={-6} color="gray" />
        <Square x={0} y={-4} color="gray" />
        <Square x={0} y={-2} color="gray" />

        {/* fill */}
        <Square x={2} y={-2} color="#e0b3fc" />
        <Square x={4} y={-4} color="#e0b3fc" />
        <Square x={6} y={-6} color="#e0b3fc" />
        <Square x={8} y={-4} color="#e0b3fc" />
        <Square x={10} y={-2} color="#e0b3fc" />
        <Square x={10} y={-4} color="#e0b3fc" />
        <Square x={8} y={-6} color="#e0b3fc" />
        <Square x={6} y={-8} color="#e0b3fc" />
        <Square x={8} y={-10} color="#e0b3fc" />
        <Square x={10} y={-12} color="#e0b3fc" />
        <Square x={10} y={-14} color="#e0b3fc" />
        <Square x={10} y={-16} color="#e0b3fc" />
        <Square x={8} y={-12} color="#e0b3fc" />
        <Square x={6} y={-10} color="#e0b3fc" />
        <Square x={4} y={-12} color="#e0b3fc" />
        <Square x={2} y={-14} color="#e0b3fc" />
        <Square x={2} y={-16} color="#e0b3fc" />
        <Square x={2} y={-18} color="#e0b3fc" />
        <Square x={2} y={-12} color="#e0b3fc" />
        <Square x={4} y={-10} color="#e0b3fc" />
        <Square x={4} y={-6} color="#e0b3fc" />
        <Square x={2} y={-4} color="#e0b3fc" />
      </Canvas>
    </div>
  );
}

function Square({ x, y, color }: { x: number; y: number; color: string }) {
  const positionArray: [x: number, y: number, z: number] = [x, y, 0];

  return (
    <>
      <mesh position={positionArray}>
        <boxGeometry args={[2, 2, 0]} />
        <meshStandardMaterial color={color} />

        <lineSegments>
          <edgesGeometry
            attach="geometry"
            args={[new THREE.BoxGeometry(2, 2, 0)]}
          />
          <lineBasicMaterial attach="material" color="black" />
        </lineSegments>
      </mesh>
    </>
  );
}
