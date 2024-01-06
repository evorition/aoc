import { readFileSync } from "node:fs";

console.log(
  new Set(
    [...readFileSync("./input.txt", { encoding: "utf-8" }).trim()]
      .map((x) => ({ "<": [0, -1], ">": [0, 1], "^": [1, 0], v: [-1, 0] }[x]))
      .reduce(
        (p, c) => [...p, [p.at(-1)[0] + c[0], p.at(-1)[1] + c[1]]],
        [[0, 0]]
      )
      .map(([x, y]) => `${x}/${y}`)
  ).size
);
