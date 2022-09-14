const poolPromise = require('../config/poolPromise')
const { employee } = require('../config/config')


module.exports={
getAll: async (req,res)=>{
        try{
        let pool=await poolPromise()
        const result= await pool.request().query(`SELECT * FROM Employee `)
        const employees=result.recordset
        console.log(employees)
        res.json(employees)
    }
    catch(error){
        res.status(500).json(error)
    }},
getById: async (req,res)=>{
    try{
        let pool =await poolPromise()
        const result= await pool.request()
        .input('Id',req.params.id)
        .query(`SELECT * FROM Employee where Id=@id`)
         const employee=result.recordset.length?result.recordset[0]:null
         if (employee){
            res.json(employee)

         }
         else{
            res.status(400).json({
                message:'Record not found'
            })
         }
    }
         catch(error){
            res.status(500).json(error)
         }
    },
    
createEmployee: async (req,res)=>{
        try{
            let {Code,Name,Job,Salary,Department}=req.body
            let pool = await poolPromise()
           let result= await pool.request()
            .input('Code',Code)
            .input('Name', Name)
            .input('Job', Job)
           .input('Salary',Salary)
            .input('Department', Department)
            .execute('insertEmployee')
            const employee=result.rowsAffected
            if(employee){
                
                res.json({
                    message:"Created",
                    data:employee
                } )

            }
            else{
                res.status(500).json({
                    message:'Not created'
                })
            }
           
            }
         catch (error) {
            res.status(500).json(error)

        }
             
       
    },

     
    
updateEmployee: async (req,res)=>{
        try{
            let {Id,Code,Name,Job,Salary,Department}=req.body
            let pool = await poolPromise()
           let result= await pool.request()
            .input('Id',Id)
            .input('Code',Code)
            .input('Name', Name)
            .input('Job', Job)
           .input('Salary',Salary)
            .input('Department', Department)
            .execute('updateEmployee')
            
        let employee = result.rowsAffected.length ? result.rowsAffected[0] : null;
            
            if(employee){
                
                res.json({
                    message:"Updated",
                    data:employee
                } )

            }
            else{
                res.status(500).json({
                    message:'Not updated'
                })
            }
           
            }
         catch (error) {
            res.status(500).json(error)

        }
           },

      
deleteEmployee: async (req,res)=>{
        try {
            let{id}=req.params
            let pool= await poolPromise();
            const result = await pool.request()
                .input('Id', id)
                .execute('deleteEmployee');
    
            let employee = result.rowsAffected.length ? result.rowsAffected[0] : null;
            if (employee) {
               
                res.json(employee);
            } else {
                res.status(404).json({
                    message: 'Record not found'
                });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    
}    
}

    