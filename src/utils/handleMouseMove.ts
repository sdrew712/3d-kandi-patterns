import { Dispatch, SetStateAction } from "react";
import { ThreeEvent } from "@react-three/fiber";

export function handleMouseMove({
  e,
  setPosition,
}: {
  e: ThreeEvent<PointerEvent>;
  setPosition: Dispatch<
    SetStateAction<{
      x: number | null;
      y: number | null;
      z: number | null;
    }>
  >;
}) {
  const intersects = e.intersections;
  intersects.forEach((intersection) => {
    const coords = intersection.point.floor();
    setPosition({
      x: coords.x,
      y: coords.y,
      z: coords.z,
    });
  });
}
