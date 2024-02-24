import * as THREE from "three";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

export default function Cube() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas resize={{ scroll: true }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Square position={-1} color="red" />
      </Canvas>
    </div>
  );
}

function Square({ position, color }: { position: number; color: string }) {
  const positionArray: [x: number, y: number, z: number] = [
    position,
    position,
    position,
  ];

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
