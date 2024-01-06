import { readFileSync } from "node:fs";

const g = {};

readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .forEach((l) => {
    const [_, n1, n2, w] = l.match(/(.+) to (.+) = (.+)/);
    if (g[n1] === undefined) g[n1] = {};
    if (g[n2] === undefined) g[n2] = {};
    g[n1][n2] = +w;
    g[n2][n1] = +w;
  });

const p = (x) => {
  if (x.length === 0) {
    return [[]];
  }
  const o = [];
  for (let i = 0; i < x.length; ++i) {
    for (const s of p([...x.slice(0, i), ...x.slice(i + 1)])) {
      o.push([x[i], ...s]);
    }
  }
  return o;
};

let m = -Infinity;
for (const x of p(Object.keys(g))) {
  let t = 0;
  for (let i = 1; i < x.length; ++i) {
    t += g[x[i - 1]][x[i]];
  }
  m = Math.max(t, m);
}

console.log(m);
