import { open } from "node:fs/promises";

const file = await open("./input.txt");
let ans = 0;
for await (const line of file.readLines()) {
  const matches = [...line.matchAll(/\d/g)];
  const firstNumber = matches.at(0)[0];
  const lastNumber = matches.at(-1)[0];
  const num = Number(`${firstNumber}${lastNumber}`);
  ans += num;
}

console.log(ans);
