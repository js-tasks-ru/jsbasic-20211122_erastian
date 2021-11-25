function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else if (maxlength >= maxlength - 1) {
    return str.slice(0, maxlength - 1) + '…';
  }
}
