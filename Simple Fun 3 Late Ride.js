const lateRide = (n) => {
  const h = Math.floor(n / 60) % 24;
  const m = n - 60 * h;
  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const t = hh.split(" ") + mm.split(" ");
  let sum = 0;
  for (i of t) {
    sum = sum + Number(i);
  }
  return sum;
};
