const knapsackLight = (value1, weight1, value2, weight2, maxW) =>
  weight1 + weight2 <= maxW
    ? value1 + value2
    : weight1 <= maxW && weight2 <= maxW
    ? Math.max(value1, value2)
    : weight2 <= maxW
    ? value2
    : weight1 <= maxW
    ? value1
    : 0;
