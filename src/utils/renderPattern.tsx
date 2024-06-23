import Square from "@/app/Square";
import { Pattern } from "@/types";
export function renderPattern(pattern: Pattern) {
  return (
    <>
      <Grid pattern={pattern} />

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
