const makeCalculationRequest = async (leftValue, rightValue, operand) => {
   if (!leftValue || !rightValue) {
      throw new Error('Invalid entry.');
   }
   const urlBase = 'http://localhost:8080';
   const queryString = `leftOperand=${leftValue}&rightOperand=${rightValue}&operation=${operand}`;
   const response = await fetch(`${urlBase}/${queryString}`);

   const data = await response.json();

   return data;
};

export default makeCalculationRequest;
