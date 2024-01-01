import { readFileSync } from "node:fs";

console.log(
  readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split("x"))
    .map((val) => [val[0] * val[1], val[1] * val[2], val[2] * val[0]])
    .reduce((p, c) => p + c.reduce((p, c) => p + c * 2, 0) + Math.min(...c), 0)
);
