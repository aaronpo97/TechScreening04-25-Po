export interface SuccessResponse {
   expression: string;
   result: number;
   success: true;
   status: 200;
}

export interface ErrorResponse {
   message: string;
   success: false;
   status: 400;
}
