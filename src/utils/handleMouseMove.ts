import { Dispatch, SetStateAction } from "react";
import { ThreeEvent } from "@react-three/fiber";

export function handleMouseMove({
  e,
  setMousePosition,
}: {
  e: ThreeEvent<PointerEvent>;
  setMousePosition: Dispatch<
    SetStateAction<{
      x: number | null;
      y: number | null;
      z: number | null;
    }>
  >;
}) {
  const intersects = e.intersections;
  intersects.forEach((intersection) => {
    const coords = intersection.point;

    setMousePosition({
      x: coords.x > 0 ? Math.floor(coords.x) : Math.ceil(coords.x),
      y: coords.y > 0 ? Math.floor(coords.y) : Math.ceil(coords.y),
      z: coords.z > 0 ? Math.floor(coords.z) : Math.ceil(coords.z),
    });
  });
}
