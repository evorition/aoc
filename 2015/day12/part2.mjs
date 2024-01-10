import { readFileSync } from "node:fs";

const c = JSON.parse(readFileSync("./input.txt").toString());

let s = 0;

const t = (o) => {
  for (const p in o) {
    if (Object.values(o).includes("red") && !Array.isArray(o)) return;
    else if (typeof o[p] === "object") t(o[p]);
    else if (typeof o[p] === "number") s += o[p];
  }
};

t(c);
console.log(s);
