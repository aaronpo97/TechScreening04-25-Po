import { SuccessResponse } from '../types/Response';

const calculationResultContainer: HTMLDivElement = document.querySelector('#calculation-result');
const expressionResultContainer: HTMLDivElement = document.querySelector('#expression-result');

/**
 * @description
 * Takes the calculation result data and sets the inner HTML content of the calculation-result container and expression-result container.
 */
const setResult = (calculationResult: SuccessResponse) => {
   calculationResultContainer.innerHTML = calculationResult.result.toString();
   expressionResultContainer.innerHTML = calculationResult.expression;
};

export default setResult;
