import clearErrorMessages from '../util/clearErrorMessages';

/**
 * @param {Error} error
 * @returns {void}
 */
const toggleErrorMessage = error => {
   clearErrorMessages();
   console.log(error);
   const errorMessageContainer = document.querySelector('#error-message');
   const errorMessageList = document.querySelector('#error-list');

   const node = document.createElement('li');
   node.id = 'error-message-text';
   const errorNode = document.createTextNode(error.message);
   node.appendChild(errorNode);
   errorMessageList.appendChild(node);

   errorMessageContainer.classList.remove('hidden');
};

export default toggleErrorMessage;
