import express from 'express';
import { register,login,currentUser } from '../controllers/userControllers.js';
import { validateToken } from '../middlewares/tokenValidation.js';
const userRoutes=express.Router();

userRoutes.post('/register',register);
userRoutes.post('/login',login);
userRoutes.get('/currentUser',validateToken,currentUser);



export default userRoutes;