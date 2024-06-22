import Square from "@/app/Square";
import { Pattern } from "@/types";
export function renderPattern(pattern: Pattern) {
  return (
    <>
      {pattern.map((element) => (
        <Square
          x={element.x}
          y={element.y}
          z={element.z ?? 0}
          color={element.color}
        />
      ))}
    </>
  );
}
