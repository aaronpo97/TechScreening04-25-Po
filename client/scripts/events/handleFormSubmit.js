import makeCalculationRequest from '../api/makeCalculationRequest';

/** @type {HTMLInputElement} */
const leftOperandInput = document.querySelector('#left-operand');

/** @type {HTMLInputElement} */
const rightOperandInput = document.querySelector('#right-operand');

/** @type {HTMLDivElement} */
const calculationResultContainer = document.querySelector('#calculation-result');

/** @type {HTMLDivElement} */
const expressionResultContainer = document.querySelector('#expression-result');

/** @type {HTMLDivElement} */
const errorMessageContainer = document.querySelector('#error-message');

/** @param {Event} event */
const handleFormSubmit = event => {
   event.preventDefault();

   const { value: leftValue } = leftOperandInput;
   const { value: rightValue } = rightOperandInput;

   /** @type {HTMLInputElement} */
   const selectedOperandInput = document.querySelector('input[name="operand"]:checked');
   const operand = selectedOperandInput.value;

   makeCalculationRequest(parseFloat(leftValue), parseFloat(rightValue), operand)
      .then(calculationResult => {
         if (calculationResult.status !== 200) {
         }
         calculationResultContainer.innerHTML = calculationResult.result.toString();
         expressionResultContainer.innerHTML = calculationResult.expression;
      })
      .catch(error => {
         if (error instanceof Error) {
            errorMessageContainer.classList.remove('hidden');
            leftOperandInput.value = '';
            rightOperandInput.value = '';
         }
      });
};

export default handleFormSubmit;
