import { readFileSync } from "node:fs";

console.log(
  readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(
      (x) =>
        x.replaceAll(/\\/g, "\\\\").replaceAll(/"/g, '\\"').length -
        x.length +
        2
    )
    .reduce((x, y) => x + y)
);
