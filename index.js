const express=require('express')
require('dotenv').config()
const cors=require('cors')
const bodyParser=require('body-parser')
const server=express()
server.use(cors())
const userRoute=require('./routes/employeeRoutes')
PORT= process.env.PORT 
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use('/employees',userRoute)
server.use((req,res,next)=>{
    const error= new Error('Bad request')
    next(error)
    
})
server.use((err,req,res,next)=>{
    
    res.json({
        status:err.status,
        message:err.message
    })
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})
