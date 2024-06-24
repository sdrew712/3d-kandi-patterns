import { Pattern } from "@/types";
import Square from "./Square";

export function Grid({ plane }: { plane: Pattern[0] }) {
  const patternStart = plane.beads.length / 2;

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
