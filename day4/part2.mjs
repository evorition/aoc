import { readFile } from "node:fs/promises";

const file = await readFile("./input.txt", { encoding: "utf-8" });
const content = file.split("\n").slice(0, -1);
const initialArray = Array.from({ length: content.length }, (_, i) => [
  i + 1,
  0,
]);
const map = new Map(initialArray);

for (let i = 0; i < content.length; ++i) {
  const line = content[i];
  const numbers = line.split(":")[1].split("|");
  const [winningNumbers, myNumbers] = numbers.map((number) =>
    number
      .trim()
      .replaceAll(/(\s{2,})/g, " ")
      .split(" ")
  );
  const winningNumbersCount = myNumbers.filter((number) =>
    winningNumbers.includes(number)
  ).length;
  if (winningNumbers) {
    map.set(i + 1, map.get(i + 1) + 1);
    const numberOfCopies = map.get(i + 1);
    for (let j = 1; j <= winningNumbersCount; ++j) {
      map.set(i + 1 + j, map.get(i + 1 + j) + numberOfCopies);
    }
  }
}

let ans = 0;
map.forEach((value) => {
  ans += value;
});
console.log(ans);
