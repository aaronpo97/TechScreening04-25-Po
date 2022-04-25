import handleCloseErrorMessage from './events/handleCloseErrorMessage';
import handleFormSubmit from './events/handleFormSubmit';

const form = document.querySelector('#calculator-form');

form.addEventListener('submit', handleFormSubmit);

const errorMessageContainer = document.querySelector('#error-message');
const closeErrorIcon = document.querySelector('#close-error-icon');

errorMessageContainer.classList.add('hidden');
closeErrorIcon.addEventListener('click', handleCloseErrorMessage);
