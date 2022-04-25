/**
 * @param {number} leftValue
 * @param {number} rightValue
 * @param {string} operand
 * @returns {Promise<{expression: string, result: number, success: true, status: 200} | {message: string, success: false, status: 400}>}
 *
 * Returns either a success object which includes the expression and result with status code 200,
 * or an error object with an error message and status 400.
 */

const makeCalculationRequest = async (leftValue, rightValue, operand) => {
   if (!leftValue || !rightValue) {
      throw new Error('Invalid entry.');
   }
   const urlBase = import.meta.env.VITE_API_URL;
   const queryString = `leftOperand=${leftValue}&rightOperand=${rightValue}&operation=${operand}`;
   const response = await fetch(`${urlBase}/${queryString}`);

   const data = await response.json();

   return data;
};

export default makeCalculationRequest;
