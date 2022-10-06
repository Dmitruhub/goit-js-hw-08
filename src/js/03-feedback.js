const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateForm();

function updateForm() {
  const parsedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (parsedForm) {
    form.elements.email.value = parsedForm.email;
    form.elements.message.value = parsedForm.message;
  }
}

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
const saveData = {};
function onInput(evt) {
  // const saveData = {
  //   email: form.elements.email.value,
  //   message: form.elements.message.value,
  // };
  saveData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function onSubmit(evt) {
  evt.preventDefault();
  const parsedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('The fields is not filling!');
  } else {
    console.log(parsedForm);
    localStorage.removeItem('feedback-form-state');

    form.reset();
  }
}
