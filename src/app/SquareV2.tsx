import * as THREE from "three";
import { handleClickedMesh } from "@/utils/handleClickedMesh";

export default function Square({
  x,
  y,
  z = 0,
  color,
}: {
  x: number;
  y: number;
  z?: number;
  color: string;
}) {
  const positionArray: [x: number, y: number, z: number] = [x, y, z];

  return (
    <mesh
      position={positionArray}
      onClick={() => handleClickedMesh(positionArray)}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial color={color} />

      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(1, 1, 1)]}
        />
        <lineBasicMaterial attach="material" color="gray" />
      </lineSegments>
    </mesh>
  );
}
