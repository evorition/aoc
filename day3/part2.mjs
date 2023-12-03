import { readFileSync } from "node:fs";

const content = readFileSync("./input.txt", { encoding: "utf-8" });
const contentArray = content.split("\n").slice(0, -1);

const numbers = [];
const symbols = [];

for (let i = 0; i < contentArray.length; ++i) {
  const line = contentArray[i];
  let isParsingNumber = false;
  let currentNumber;
  for (let j = 0; j < line.length; ++j) {
    if (!Number.isNaN(parseInt(line[j]))) {
      if (!isParsingNumber) {
        currentNumber = { line: i, start: j };
        isParsingNumber = true;
      } else if (j === line.length - 1) {
        currentNumber.end = j + 1;
        numbers.push(currentNumber);
      }
    } else {
      if (line[j] === "*") {
        symbols.push({ line: i, index: j });
      }
      if (isParsingNumber) {
        currentNumber.end = j;
        numbers.push(currentNumber);
        isParsingNumber = false;
      }
    }
  }
}

let ans = 0;
for (const symbol of symbols) {
  const ratios = [];
  for (const number of numbers) {
    if (Math.abs(number.line - symbol.line) <= 1) {
      if (number.start - 1 <= symbol.index && symbol.index <= number.end) {
        ratios.push(
          parseInt(contentArray[number.line].slice(number.start, number.end))
        );
      }
    }
  }
  if (ratios.length > 1) {
    ans += ratios.reduce((a, b) => a * b, 1);
  }
}

console.log(ans);
