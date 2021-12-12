function toggleText() {
  let toggleBtn = document.querySelector('.toggle-text-button');
  let targetText = document.querySelector('#text');

  toggleBtn.addEventListener('click', function () {
    targetText.hidden = targetText.hidden !== true;
  });
}
