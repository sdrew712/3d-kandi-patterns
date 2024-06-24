import { Pattern } from "@/types";
import Square from "./Square";

export function Grid({ plane }: { plane: Pattern[0] }) {
  const xPatternStart = plane.beads[0].x;
  const yPatternStart = plane.beads[0].y;

  const xGridStart = xPatternStart - 4;
  const yGridStart = yPatternStart + 4;

  return (
    <>
      <group>
        {Array.from({ length: 14 }, (_, i) =>
          Array.from({ length: 14 }, (_, j) => (
            <Square
              key={`${i} ${j}`}
              x={xGridStart + i * 2}
              y={yGridStart - j * 2}
            />
          ))
        )}
      </group>
    </>
  );
}
