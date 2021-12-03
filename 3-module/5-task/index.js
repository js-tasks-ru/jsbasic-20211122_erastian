function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(item => ((item.includes('.')) ? parseFloat(item) : parseInt(item)))
    .filter(item => !isNaN(item));

  return {min: Math.min(...arr), max: Math.max(...arr)};
}
