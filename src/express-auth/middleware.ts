import { ExpressAuthException, ExpressAuthImplementationException } from './exceptions';
import { Request, Response, NextFunction } from 'express';


const authErrorMiddleware = (error:Error , request:Request, response:Response, next:NextFunction)=>{
        if(error instanceof ExpressAuthImplementationException){
            response.status(500).json({message: error.message});
        }
    }
