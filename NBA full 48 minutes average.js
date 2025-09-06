const pointsPer48 = (ppg, mpg) => {
  if (mpg > 0) {
    let total = 48 / mpg;
    let tp = total * ppg;
    return Number.parseFloat(tp.toFixed(1));
  } else {
    return 0;
  }
};
