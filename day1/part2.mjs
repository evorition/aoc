import { open } from "node:fs/promises";

const alphaNums = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const file = await open("./input.txt");
let ans = 0;
for await (const line of file.readLines()) {
  const nums = [];
  for (let i = 0; i < line.length; ++i) {
    if (parseInt(line[i])) {
      nums.push(line[i]);
    } else {
      alphaNums.forEach((value, index) => {
        if (line.startsWith(value, i)) {
          nums.push(index + 1);
        }
      });
    }
  }
  const num = Number(`${nums.at(0)}${nums.at(-1)}`);
  ans += num;
}

console.log(ans);
