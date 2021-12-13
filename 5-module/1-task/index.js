function hideSelf() {
  let btnForHide = document.querySelector('.hide-self-button');

  btnForHide.addEventListener('click', function () {
    this.hidden = true;
  });
}
