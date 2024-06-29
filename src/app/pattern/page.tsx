"use client";

import styles from "../page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ExcisionV2 } from "../../sample-patterns/excisionV2";
import { renderPatternV2 } from "@/utils/renderPatternV2";

export default function Pattern() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{
          position: [0, 0, 35],
        }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {renderPatternV2(ExcisionV2)}
      </Canvas>
    </div>
  );
}
