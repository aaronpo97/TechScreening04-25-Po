import handleCloseErrorMessage from './events/handleCloseErrorMessage';
import handleFormSubmit from './events/handleFormSubmit';
const form = document.querySelector('#calculator-form');

form.addEventListener('submit', handleFormSubmit);

const closeErrorIcon = document.querySelector('#close-error-icon');

closeErrorIcon.addEventListener('click', handleCloseErrorMessage);
