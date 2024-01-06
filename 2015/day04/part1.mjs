import crypto from "node:crypto";

const content = "iwrupvqb";

let i = 1;

while (
  !crypto
    .createHash("md5")
    .update(`${content}${i}`)
    .digest("hex")
    .startsWith("00000")
) {
  ++i;
}

console.log(i);
