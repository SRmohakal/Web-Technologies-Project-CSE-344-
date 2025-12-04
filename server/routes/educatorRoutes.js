import express from 'express'

import { protectEducator } from '../middlewares/authMiddleware.js';
import upload from '../configs/multer.js';

const educatorRouter = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.get('/courses', protectEducator, getEducatorCourses);
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData);
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData);


export default educatorRouter;