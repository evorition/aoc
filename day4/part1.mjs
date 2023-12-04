import { open } from "node:fs/promises";

const file = await open("./input.txt");

let ans = 0;
for await (const line of file.readLines()) {
  const numbers = line.split(":")[1].split("|");
  const [winningNumbers, myNumbers] = numbers.map((number) =>
    number
      .trim()
      .replaceAll(/(\s{2,})/g, " ")
      .split(" ")
  );
  const myWinningNumbers = myNumbers.filter((number) =>
    winningNumbers.includes(number)
  );
  if (myWinningNumbers.length) {
    ans += myWinningNumbers.length > 1 ? 2 ** (myWinningNumbers.length - 1) : 1;
  }
}

console.log(ans);

await file.close();
