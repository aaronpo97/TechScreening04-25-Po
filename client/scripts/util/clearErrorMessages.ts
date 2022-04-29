/**
 * @description
 * Clears the error message list by removing the first child of the error list container.
 */
const clearErrorMessages = (): void => {
   const errorMessageList = document.querySelector('#error-list');
   if (!errorMessageList.firstChild) return;

   errorMessageList.removeChild(errorMessageList.firstChild);
};

export default clearErrorMessages;
