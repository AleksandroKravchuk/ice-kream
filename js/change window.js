const formMain = document.querySelector('.js-window');
const formSecondary = document.querySelector('.js-changewindow');
const newClient = document.querySelector('#new-client');
const oldClient = document.querySelector('#old-client');

newClient.addEventListener('click', changeWindow);

function changeWindow(event) {
  formMain.classList.remove('change-hidden');
    formSecondary.classList.add('change-hidden');
     newClient.classList.add('act');
    oldClient.classList.remove('act');
}

oldClient.addEventListener('click', oxystUpWindow);

function oxystUpWindow() {
    formSecondary.classList.remove('change-hidden');
    formMain.classList.add('change-hidden');
    newClient.classList.remove('act');
    oldClient.classList.add('act');
}