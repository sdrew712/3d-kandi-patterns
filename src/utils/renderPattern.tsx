import { Grid } from "@/app/Grid";
import Square from "@/app/Square";
import { Pattern } from "@/types";
export function renderPattern(pattern: Pattern) {
  return (
    <>
      {pattern.map((plane) =>
        plane.beads.map((bead) => (
          <>
            <Grid plane={plane} />
            <Square
              key={`${bead.x} ${bead.y} ${bead.z}`}
              x={bead.x}
              y={bead.y}
              z={bead.z ?? 0}
              color={bead.color}
            />
          </>
        ))
      )}
    </>
  );
}
