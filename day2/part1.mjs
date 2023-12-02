import { readFile } from "node:fs/promises";

const colors = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14],
]);

const content = await readFile("./input.txt", { encoding: "utf-8" });
const contentArray = content.split("\n").slice(0, -1);
let ans = 0;
for (const line of contentArray) {
  const gameNumber = +line.match(/^Game (\d+):/)[1];
  let stop = false;
  for (const [color, colorCount] of colors.entries()) {
    const regex = new RegExp(`(\\d+) ${color}`, "g");
    const matches = [...line.matchAll(regex)].map((value) =>
      parseInt(value[1])
    );
    if (Math.max(...matches) > colorCount) {
      stop = true;
      break;
    }
  }
  if (stop) continue;
  ans += gameNumber;
}

console.log(ans);
