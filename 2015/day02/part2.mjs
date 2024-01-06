import { readFileSync } from "node:fs";

console.log(
  readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split("x").map(Number))
    .map(([x, y, z]) => 2 * Math.min(x + y, y + z, z + x) + x * y * z)
    .reduce((p, c) => p + c, 0)
);
