let throttle = require('lodash.throttle');

let form = document.querySelector('form');
let input = document.querySelector('input');
let message = document.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(() => {
    let object = {
      email: input.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(object));
  }, 500)
);

let parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  input.value = '';
  message.value = '';
} else {
  input.value = parsedData.email;
  message.value = parsedData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  input.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
});
