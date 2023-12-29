import { IGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
): IGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: [],
  };
};

export default handleValidationError;
