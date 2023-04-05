import throttle from 'lodash.throttle';

const keyStorage = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', formSubmit);

let infoForm = JSON.parse(localStorage.getItem(keyStorage)) || {};
const { email, message } = formRef.elements;

reloadPage();

function onInputChange() {
  infoForm = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(keyStorage, JSON.stringify(infoForm));
}

function reloadPage() {
  if (infoForm) {
    email.value = infoForm.email || '';
    message.value = infoForm.email || '';
  }
}

function formSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Усі поля мають бути заповнені');
  }
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(keyStorage);
  formRef.reset();
  infoForm = {};
}
