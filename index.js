import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
dbConnection();
const app =express();
const port=process.env.PORT ;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(userRoutes);
app.use(contactRoutes);


app.listen(port,()=>{
    console.log(`Server running on port:${port}`)
})