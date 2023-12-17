import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './service';

const signUp: RequestHandler = catchAsync(async (req, res) => {
  const result = AuthService.signUp();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Signed Up successfully',
    data: result,
  });
});

export const AuthController = { signUp };
