import { readFileSync } from "node:fs";

console.log(
  [...readFileSync("./input.txt").toString().trim()]
    .map((x) => (x === "(" ? 1 : -1))
    .reduce((x, y) => [...x, x.at(-1) + y], [0])
    .indexOf(-1)
);
