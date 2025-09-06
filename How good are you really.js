const betterThanAverage = (classPoints, yourPoints) => {
  let classPointsTotal = 0;
  for (i = 0; i < classPoints.length; i++) {
    classPointsTotal += classPoints[i];
  }
  const classAverage = classPointsTotal / classPoints.length;
  if (classAverage < yourPoints) {
    return true;
  } else {
    return false;
  }
};
