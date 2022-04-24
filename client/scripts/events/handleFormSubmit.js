import makeCalculationRequest from './api/makeCalculationRequest';

const leftOperandInput = document.querySelector('#left-operand');
const rightOperandInput = document.querySelector('#right-operand');
const calculationResultContainer = document.querySelector('#calculation-result');
const expressionContainer = document.querySelector('#expression-container');

const handleFormSubmit = event => {
   event.preventDefault();

   const { value: leftValue } = leftOperandInput;
   const { value: rightValue } = rightOperandInput;

   const selectedOperandInput = document.querySelector('input[name="operand"]:checked');
   const operand = selectedOperandInput.value;

   makeCalculationRequest(parseFloat(leftValue), parseFloat(rightValue), operand)
      .then(calculationResult => {
         calculationResultContainer.innerHTML = calculationResult.result.toString();
         expressionContainer.innerHTML = calculationResult.result.toString();
      })
      .catch(error => {
         if (error instanceof Error) {
            console.log(error.message);
         }
      });
};

export default handleFormSubmit;
