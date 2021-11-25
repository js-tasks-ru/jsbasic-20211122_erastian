function checkSpam(str) {
  let stopList = ['1xBet', 'XXX'];
  let newString = str.toLowerCase();

  for (let word of stopList) {
    if (newString.includes(word.toLowerCase())) {
      return true;
    }
  }
  return false;
}
