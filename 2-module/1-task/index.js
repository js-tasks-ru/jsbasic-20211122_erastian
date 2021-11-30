function sumSalary(salaries) {
  let total = 0;
  for (let key in salaries) {
    if (salaries[key] && (isFinite(salaries[key]) || isNaN(salaries[key]) && Number(salaries[key]))) {
      total += salaries[key];
    }
  }
  return total;
}
