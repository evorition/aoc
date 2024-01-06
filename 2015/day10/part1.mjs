let c = "1113222113";

for (let i = 0; i < 40; ++i) {
  c = ((x) => {
    let i = 0;
    let o = "";
    while (i < x.length) {
      let j = i;
      while (x[i] === x[++j]) {}
      o += `${j - i}${x[i]}`;
      i += j - i;
    }
    return o;
  })(c);
}

console.log(c.length);
