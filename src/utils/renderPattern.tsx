import { useState } from "react";
import * as THREE from "three";
import Square from "@/app/Square";
import { Pattern } from "@/types";
import { handleMouseMove } from "@/utils/handleMouseMove";

export function renderPattern(pattern: Pattern) {
  const [mousePosition, setMousePosition] = useState<{
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
      onPointerMove={(e) => handleMouseMove({ e, setMousePosition })}
    >
      {pattern.map((plane) =>
        plane.beads.map((bead) => (
          <group key={`${bead.x} ${bead.y} ${bead.z}`}>
            <Square
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
      <Square
        x={currentPlane.x ?? mousePosition.x}
        y={currentPlane.y ?? mousePosition.y}
        z={currentPlane.z ?? mousePosition.z}
        color="#cbdcf7"
      />
    </mesh>
  );
}
