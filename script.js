'use strict';

const btnShowModalWindow = document.querySelectorAll('.show-modal-window');
const modalWindow = document.querySelector('.modal-window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const overlay = document.querySelector('.overlay');

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
      closeModalWindow();
    }
  });
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModalWindow.length; i++) {
  btnShowModalWindow[i].addEventListener('click', showModalWindow);
}

[btnCloseModalWindow, overlay].forEach(elem =>
  elem.addEventListener('click', closeModalWindow)
);
