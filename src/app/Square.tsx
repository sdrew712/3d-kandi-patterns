import * as THREE from "three";

export default function Square({
  x,
  y,
  z = 0,
  color,
}: {
  x: number;
  y: number;
  z?: number;
  color?: string;
}) {
  const positionArray: [x: number, y: number, z: number] = [x, y, z];

  if (!color) {
    return (
      <mesh position={positionArray}>
        <lineSegments>
          <edgesGeometry
            attach="geometry"
            args={[new THREE.BoxGeometry(2, 2, 2)]}
          />
          <lineBasicMaterial attach="material" color="gray" />
        </lineSegments>
      </mesh>
    );
  }

  return (
    <mesh position={positionArray}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />

      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(2, 2, 2)]}
        />
        <lineBasicMaterial attach="material" color="gray" />
      </lineSegments>
    </mesh>
  );
}
