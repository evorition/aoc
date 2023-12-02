import { readFile } from "node:fs/promises";

const colors = ["red", "green", "blue"];

const content = await readFile("./input.txt", { encoding: "utf-8" });
const contentArray = content.split("\n").slice(0, -1);
let ans = 0;
for (const line of contentArray) {
  const power = [];
  for (const color of colors) {
    const regex = new RegExp(`(\\d+) ${color}`, "g");
    const matches = [...line.matchAll(regex)].map((value) =>
      parseInt(value[1])
    );
    power.push(Math.max(...matches));
  }
  ans += power.reduce((a, b) => a * b, 1);
}

console.log(ans);
