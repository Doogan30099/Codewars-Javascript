const formatMoney = (amount) => {
  const arr = amount.toFixed(2).split("");
  arr.unshift("$");
  return arr.join("");
};
