function ucFirst(str) {
  if (str == '') {
    return '';
  }
  let firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.slice(1);
}
