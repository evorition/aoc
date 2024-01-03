import { readFileSync } from "node:fs";

const w = new Map();
const c = readFileSync("./input.txt").toString().trim().split("\n");

const get = (x) => {
  if (x.match(/\d+/)) {
    return +x;
  } else if (w.has(x)) {
    return w.get(x);
  } else {
    throw 0;
  }
};

const run = (c) => {
  while (c.length) {
    const l = c.shift();
    let m;
    try {
      if ((m = l.match(/^(\S+) -> (.+)/))) {
        if (w.has(m[2])) {
          continue;
        }
        const v = get(m[1]);
        w.set(m[2], v);
      } else if ((m = l.match(/^(\S+) (\w+) (\S+) -> (\w+)/))) {
        const x = get(m[1]);
        const y = get(m[3]);
        w.set(
          m[4],
          { AND: x & y, OR: x | y, LSHIFT: x << y, RSHIFT: x >> y }[m[2]]
        );
      } else {
        m = l.match(/NOT (\w+) -> (\w+)/);
        const v = get(m[1]);
        w.set(m[2], ~v);
      }
    } catch {
      c.push(l);
    }
  }
};

run(c.concat());
const a = w.get("a");
w.clear();
w.set("b", a);
run(c.concat());
console.log(w.get("a"));
