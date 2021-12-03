function camelize(str) {
  if (str === '') {
    return str;
  } else {
    let arr = str.split('-');
    return arr
      .filter(item => item.length > 0)
      .map(item => ((item !== arr[0] ? (item[0].toUpperCase() + item.slice(1)) : item)))
      .join('');
  }


}
