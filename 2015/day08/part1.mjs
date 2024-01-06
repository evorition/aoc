import { readFileSync } from "node:fs";

console.log(
  readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(
      (x) =>
        x.length -
        x.replace(/^"(.*)"$/, "$1").replaceAll(/\\x\w\w|\\\\|\\"/g, "1").length
    )
    .reduce((x, y) => x + y)
);
