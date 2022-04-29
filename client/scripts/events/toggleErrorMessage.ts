import clearErrorMessages from '../util/clearErrorMessages';

/**
 * @description
 * Toggles the error message by removing the 'hidden' class in the error-message container. Creates a text node and appends the error list with a li element.
 */
const toggleErrorMessage = (error: Error): void => {
   clearErrorMessages();

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
