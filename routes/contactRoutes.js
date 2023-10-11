import express from 'express';
import { validateToken } from '../middlewares/tokenValidation.js';
import { getContacts,getById,postContact,updateContact,deleteContact } from '../controllers/contactControllers.js';
const contactRoutes=express.Router();
contactRoutes.use(validateToken);
contactRoutes.get('/',getContacts);
contactRoutes.get('/user/:id',getById);
contactRoutes.post('/post',postContact);
contactRoutes.put('/update/:id',updateContact);
contactRoutes.delete('/delete/:id',deleteContact);

export default contactRoutes;