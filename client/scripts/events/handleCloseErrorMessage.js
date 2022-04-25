/**
 * @param {Event} event
 * @returns {void}
 */

const errorMessageContainer = document.querySelector('#error-message');
const handleCloseErrorMessage = event => {
   event.preventDefault();
   errorMessageContainer.classList.add('hidden');
};

export default handleCloseErrorMessage;
