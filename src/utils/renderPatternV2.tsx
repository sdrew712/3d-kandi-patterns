import * as THREE from "three";
import SquareV2 from "@/app/SquareV2";
import { Pattern } from "@/types";

export function renderPatternV2(pattern: Pattern) {
  return (
    <mesh layers={pattern.length}>
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
        position={new THREE.Vector3(-0.5, -0.5, -0.5)}
      />
    </mesh>
  );
}
