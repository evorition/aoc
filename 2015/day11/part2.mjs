let c = "cqjxxyzz";

const p = new RegExp(
  Array.from(
    { length: 24 },
    (_, i) =>
      String.fromCharCode(i + 97) +
      String.fromCharCode(i + 98) +
      String.fromCharCode(i + 99)
  ).join("|")
);

do {
  c = c.split("");
  for (let i = c.length - 1; i >= 0; --i) {
    if (c[i] === "z") {
      c[i] = "a";
    } else {
      c[i] = String.fromCharCode(c[i].charCodeAt() + 1);
      break;
    }
  }
  c = c.join("");
} while (
  !(
    c.match(p) &&
    c.search(/[iol]/) === -1 &&
    [...c.matchAll(/(.)\1/g)].length > 1
  )
);

console.log(c);
