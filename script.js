'use strict';
const showModel = document.querySelectorAll('.show-modal');
const closeModel = document.querySelector('.close-modal');
const hidden = document.querySelector('.hidden');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', () => {
    console.log(showModel[i]);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closeModel.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('mouseup', function (e) {
  if (!modal.contains(e.target)) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
