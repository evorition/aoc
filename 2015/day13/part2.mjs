import { readFileSync } from "node:fs";

const o = { me: {} };
readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((l) => {
    let [_, n1, m, h, n2] = l.match(/^(\w+) .+ (\w+) (\d+) .+ (\w+).$/);
    h = m === "gain" ? Number(h) : Number(-h);
    (o[n1] ??= {})[n2] = h;
    o[n1]["me"] = o["me"][n1] = 0;
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

let a = -Infinity;

for (const k of p(Object.keys(o))) {
  let t = 0;
  for (let i = 1; i < k.length; ++i) {
    const a = k[i];
    const b = k[(i + 1) % k.length];
    t += o[a][b] + o[b][a];
  }
  a = Math.max(a, t);
}

console.log(a);
