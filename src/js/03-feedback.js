import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const userData = {};
const keyLocallStorage = 'feedback - form - state';

const fillForm = () => {
  const userInfo = JSON.parse(localStorage.getItem(keyLocallStorage));

  if (userInfo === null) {
    return;
  }

  for (const key in userInfo) {
    formEl.elements[key].value = userInfo[key];
  }
};

fillForm();

const onImputForm = e => {
  const { target: contactEl } = e;

  const contactValue = contactEl.value;
  const contactName = contactEl.name;

  userData[contactName] = contactValue;

  localStorage.setItem(keyLocallStorage, JSON.stringify(userData));
};

const onSubmitBtn = e => {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem(keyLocallStorage);
};

formEl.addEventListener('input', throttle(onImputForm, 500));

formEl.addEventListener('submit', onSubmitBtn);
