let throttle = require('lodash.throttle');

const input = document.querySelector("input");
const message = document.querySelector("textarea");

const object = {
    input: input.value,
    message: message.value,
}

input.addEventListener("input", () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(object));
});

console.log(localStorage)