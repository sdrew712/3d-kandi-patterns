import { Excision } from "../sample-patterns/excision";

export function handleClickedMesh(coordinates: [number, number, number]) {
  console.log(coordinates);
  if (
    !Excision.some((element) =>
      element.z
        ? element.x === coordinates[0] &&
          element.y === coordinates[1] &&
          element.z === coordinates[2]
        : element.x === coordinates[0] && element.y === coordinates[1]
    )
  ) {
    console.log("No element found at these coordinates");
  } else {
    console.log("Element found at these coordinates");
  }
}
