const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const saveData = {
  email: form.elements.email.value,
  message: form.elements.message.value,
};

updateForm();
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  evt.preventDefault();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function updateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const parsedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = parsedForm.email;
    form.elements.message.value = parsedForm.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const saveData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  const parsedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('The fields is not filling!');
  } else {
    console.log(parsedForm);
    localStorage.removeItem('feedback-form-state');

    form.reset();
  }
}
