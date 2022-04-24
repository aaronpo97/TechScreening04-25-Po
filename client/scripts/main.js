import handleFormSubmit from './events/handleFormSubmit';

const form = document.querySelector('#calculator-form');
form.addEventListener('submit', handleFormSubmit);
