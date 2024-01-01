import { readFileSync } from "node:fs";

console.log(
  readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .filter((l) => l.match(/(..).*\1/) && l.match(/(.).\1/)).length
);
