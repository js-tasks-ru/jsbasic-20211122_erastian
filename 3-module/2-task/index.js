function filterRange(arr, a, b) {
  return arr.filter(item => ((a < b) ? (item >= a && item <= b) : (item >= b && item <= a)));
}
