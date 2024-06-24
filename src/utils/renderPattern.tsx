import Square from "@/app/Square";
import { Pattern } from "@/types";
export function renderPattern(pattern: Pattern) {
  return (
    <>
      <Grid pattern={pattern} />

      {pattern.map((plane) => (
        <Square
          key={`${plane.x} ${plane.y} ${plane.z}`}
          x={plane.x}
          y={plane.y}
          z={plane.z ?? 0}
          color={plane.color}
        />
      ))}
    </>
  );
}

function Grid({ pattern }: { pattern: Pattern }) {
  const patternStart = pattern.length / 2;

  return (
    <group>
      {Array.from({ length: 50 }, (_, i) =>
        Array.from({ length: 50 }, (_, j) => (
          <Square key={`${i} ${j}`} x={i - patternStart} y={j - patternStart} />
        ))
      )}
    </group>
  );
}
