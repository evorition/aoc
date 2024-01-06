import { readFileSync } from "node:fs";

console.log(
  [...readFileSync("./input.txt").toString().trim()]
    .map((x) => (x === "(" ? 1 : -1))
    .reduce((x, y) => x + y)
);
