import clearErrorMessages from '../util/clearErrorMessages';

/**
 * @description
 * Closes the error message by adding the hidden class to the error message container.
 */
const closeErrorMessage = (): void => {
   const errorMessageContainer = document.querySelector('#error-message');
   errorMessageContainer.classList.add('hidden');
   clearErrorMessages();
};

export default closeErrorMessage;
