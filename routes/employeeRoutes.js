const employeeRoutes=require('express').Router()
const {getAll,getById,searchEmployee,createEmployee,updateEmployee,deleteEmployee}=require('../controllers/employeeControllers')
employeeRoutes.get('/all',getAll)
employeeRoutes.get('/:id',getById)
employeeRoutes.get('/search',searchEmployee)
employeeRoutes.post('/create',createEmployee)
employeeRoutes.put('/:id',updateEmployee)
employeeRoutes.delete('/:id',deleteEmployee)






module.exports=employeeRoutes