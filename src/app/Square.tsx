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
  color: string;
}) {
  const positionArray: [x: number, y: number, z: number] = [x, y, z];

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
