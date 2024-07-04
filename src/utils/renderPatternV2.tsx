import { useState } from "react";
import * as THREE from "three";
import SquareV2 from "@/app/SquareV2";
import { Pattern } from "@/types";
import { handleMouseMove } from "@/utils/handleMouseMove";

export function renderPatternV2(pattern: Pattern) {
  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
    z: number | null;
  }>({ x: null, y: null, z: null });

  const [currentPlane, setCurrentPlane] = useState<{
    x: number | null;
    y: number | null;
    z: number | null;
  }>({ x: null, y: null, z: 0 });

  return (
    <mesh
      layers={pattern.length}
      onPointerMove={(e) => handleMouseMove({ e, setPosition })}
    >
      {pattern.map((plane) =>
        plane.beads.map((bead) => (
          <group key={`${bead.x} ${bead.y} ${bead.z}`}>
            <SquareV2
              key={`${bead.x} ${bead.y} ${bead.z}`}
              x={bead.x}
              y={bead.y}
              z={bead.z ?? 0}
              color={bead.color}
            />
          </group>
        ))
      )}
      <gridHelper
        args={[50, 50, 0xff0000, "gray"]}
        rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
        position={new THREE.Vector3(0.5, 0.5, 0.5)}
      />
      <gridHelper
        args={[50, 50, 0xff0000, "gray"]}
        rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
        position={new THREE.Vector3(0.5, 0.5, -0.5)}
      />
      <SquareV2
        x={currentPlane.x ?? position.x}
        y={currentPlane.y ?? position.y}
        z={currentPlane.z ?? position.z}
        color="#cbdcf7"
      />
    </mesh>
  );
}
