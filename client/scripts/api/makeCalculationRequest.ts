/**
 * Returns either a success object which includes the expression and result with status code 200, or an error object with an error message and status 400.
 */

import { SuccessResponse, ErrorResponse } from '../types/Response';

const makeCalculationRequest = async (
   leftValue: number,
   rightValue: number,
   operand: string
): Promise<SuccessResponse | ErrorResponse> => {
   if (!leftValue || !rightValue) {
      throw new Error('Invalid entry.');
   }

   //@ts-ignore
   const urlBase = import.meta.env.VITE_API_URL;

   const queryString = `leftOperand=${leftValue}&rightOperand=${rightValue}&operation=${operand}`;
   const response = await fetch(`${urlBase}/${queryString}`);

   const data = await response.json();

   return data;
};

export default makeCalculationRequest;
