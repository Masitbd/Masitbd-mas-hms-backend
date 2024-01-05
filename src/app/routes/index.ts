import express from 'express';
import { department_routes } from '../modules/departments/departments.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/departments',
    route: department_routes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
