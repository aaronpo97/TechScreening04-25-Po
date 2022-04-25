/**
 * @returns {void}
 */
const clearErrorMessages = () => {
   const errorMessageList = document.querySelector('#error-list');
   if (!errorMessageList.firstChild) return;

   errorMessageList.removeChild(errorMessageList.firstChild);
};

export default clearErrorMessages;
