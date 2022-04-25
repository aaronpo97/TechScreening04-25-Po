import clearErrorMessages from '../util/clearErrorMessages';

/**
 * @returns {void}
 */
const closeErrorMessage = () => {
   const errorMessageContainer = document.querySelector('#error-message');
   errorMessageContainer.classList.add('hidden');
   clearErrorMessages();
};

export default closeErrorMessage;
