import constants from './constants.js';
export const errorHandler=(err,req,res,next)=>{
    const status= res.status ? res.status : 500
    switch(status){
case constants.Validation_Error:
    res.json({
        title:'Validation Error',
        message:err.message,
        stack:err.stack
    });
    break;
    case constants.Not_Found:
        res.json({
            title:'Not_Found',
            message:err.message,
            stack:err.stack
        });
        break;
         case constants.Forbidden:
        res.json({
            title:'Forbidden',
            message:err.message,
            stack:err.stack
        });
        break;
         case constants.Unauthorized:
        res.json({
            title:'Unauthorized',
            message:err.message,
            stack:err.stack
        });
              break;
              case constants.Server_Error:
              res.json({
                title:'Server_Error',
                message:err.message,
                stack:err.stack
            });

              default:
                res.json({
                message:err.message})
    }
    
}