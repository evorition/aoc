import { readFileSync } from "node:fs";

const g = Array.from({ length: 1_000 }, () => Array(1_000).fill(0));
const c = readFileSync("./input.txt").toString().trim().split("\n");

for (const l of c) {
  let [_, a, rs, cs, re, ce] = l.match(/(\D+)(\d+),(\d+)\D+(\d+),(\d+)/);
  [rs, cs, re, ce] = [rs, cs, re, ce].map(Number);
  for (let r = rs; r <= re; ++r) {
    for (let c = cs; c <= ce; ++c) {
      switch (a.trim()) {
        case "turn on":
          g[r][c] += 1;
          break;
        case "turn off":
          g[r][c] = g[r][c] === 0 ? 0 : g[r][c] - 1;
          break;
        case "toggle":
          g[r][c] += 2;
          break;
      }
    }
  }
}

console.log(g.flat().reduce((x, y) => x + y, 0));
