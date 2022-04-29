import makeCalculationRequest from '../api/makeCalculationRequest';
import setResult from '../util/setResult';
import closeErrorMessage from './closeErrorMessage';
import toggleErrorMessage from './toggleErrorMessage';

const leftOperandInput: HTMLInputElement = document.querySelector('#left-operand');
const rightOperandInput: HTMLInputElement = document.querySelector('#right-operand');

/**
 * @description
 * Makes a calculation request and then takes the calculation data and upon successful response will display the value into the DOM or upon an error response will trigger an error message with the error reason.
 *
 */
const handleFormSubmit = (event: Event) => {
   event.preventDefault();

   const { value: leftValueStr } = leftOperandInput;
   const { value: rightValueStr } = rightOperandInput;

   const selectedOperandInput: HTMLInputElement = document.querySelector(
      'input[name="operand"]:checked'
   );
   const operand = selectedOperandInput.value;

   const leftValueNum = parseFloat(leftValueStr);
   const rightValueNum = parseFloat(rightValueStr);

   makeCalculationRequest(leftValueNum, rightValueNum, operand)
      .then(calculationResult => {
         if (calculationResult.status !== 200) {
            return;
         }
         closeErrorMessage();
         setResult(calculationResult);
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
