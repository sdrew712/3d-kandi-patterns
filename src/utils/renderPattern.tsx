import Square from "@/app/Square";
import { Pattern } from "@/types";
export function renderPattern(pattern: Pattern) {
  return (
    <>
      {pattern.map((element) => (
        <Square
          key={`${element.x} ${element.y} ${element.z}`}
          x={element.x}
          y={element.y}
          z={element.z ?? 0}
          color={element.color}
        />
      ))}
    </>
  );
}
