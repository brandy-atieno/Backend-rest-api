import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
    // Split the header to get the token part
    const token =  authHeader && authHeader.split(' ')[1];
    if(!token){
    res.status(401);
    }
     
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(403);
        throw new Error('Invalid Token');
      }

      // Store the decoded user information in the request object
      req.user = decoded.user;
      next();
  } )
  }
);