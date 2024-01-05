import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { department_validation } from './departments.validations';
const router = express.Router();

router.post(
  '/departments',
  validateRequest(department_validation.create_department)
);
export const department_routes = router;
