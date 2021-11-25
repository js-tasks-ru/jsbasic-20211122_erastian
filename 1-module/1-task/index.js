function factorial(n) {
  if (n === 1 || n === 0) return 1;

  let result = n;

  for (let i = 1; i < n; i++) {
    let x = n;
    result *= x - i;
    x--;
  }

  return result;
}
