import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

export default function Cube() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[2, 2, 0]}>
          <boxGeometry args={[2, 2, 0]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh>
          <boxGeometry args={[2, 2, 0]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}
