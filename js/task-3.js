'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (evt) => {
  const inputValue = evt.target.value.trim();


  nameOutput.textContent = inputValue || 'Anonymous';
});