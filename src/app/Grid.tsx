import { Pattern } from "@/types";
import Square from "./Square";

export function Grid({ plane }: { plane: Pattern[0] }) {
  const patternStart = plane.beads.length / 2;

  return (
    <group>
      {Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 10 }, (_, j) => (
          <Square key={`${i} ${j}`} x={i * 2} y={j * 2} />
        ))
      )}
    </group>
  );
}
