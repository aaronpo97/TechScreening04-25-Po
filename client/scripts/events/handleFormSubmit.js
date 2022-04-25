import makeCalculationRequest from '../api/makeCalculationRequest';
import closeErrorMessage from './closeErrorMessage';
import toggleErrorMessage from './toggleErrorMessage';

/** @type {HTMLInputElement} */
const leftOperandInput = document.querySelector('#left-operand');

/** @type {HTMLInputElement} */
const rightOperandInput = document.querySelector('#right-operand');

/** @type {HTMLDivElement} */
const calculationResultContainer = document.querySelector('#calculation-result');

/** @type {HTMLDivElement} */
const expressionResultContainer = document.querySelector('#expression-result');

/** @param {Event} event */
const handleFormSubmit = event => {
   event.preventDefault();

   const { value: leftValueStr } = leftOperandInput;
   const { value: rightValueStr } = rightOperandInput;

   /** @type {HTMLInputElement} */
   const selectedOperandInput = document.querySelector('input[name="operand"]:checked');
   const operand = selectedOperandInput.value;

   const leftValueNum = parseFloat(leftValueStr);
   const rightValueNum = parseFloat(rightValueStr);

   makeCalculationRequest(leftValueNum, rightValueNum, operand)
      .then(calculationResult => {
         if (calculationResult.status !== 200) {
            return;
         }
         closeErrorMessage();
         calculationResultContainer.innerHTML = calculationResult.result.toString();
         expressionResultContainer.innerHTML = calculationResult.expression;
      })
      .catch(error => {
         if (error instanceof Error) {
            toggleErrorMessage(error);
            leftOperandInput.value = '';
            rightOperandInput.value = '';
         }
      });
};

export default handleFormSubmit;
