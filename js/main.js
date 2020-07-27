const upBtnEl = document.getElementById('up-btn');
const downBtnEl = document.getElementById('down-btn');
const value = document.getElementById('value');

let currentValue = 0;

upBtnEl.addEventListener('click', () => {
    currentValue++;
    value.innerHTML = currentValue;
});

downBtnEl.addEventListener('click', () => {
    currentValue--;
    value.innerHTML = currentValue;
});