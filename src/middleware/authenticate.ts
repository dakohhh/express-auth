// import express from 'express'
// import { verifyJWT } from '../authentication/jwt';
// import { CredentialException, ForbiddenException } from '../helpers/exceptions';
// import { IUser } from "../types/user";



// export interface AuthenticatedRequest extends express.Request {
//     user?: IUser

// }

// export default async (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => {
//     try {
//         const authHeader = req.headers['authorization'];

//         const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Authorization header
    
//         if (!token) {
//             throw new CredentialException("Unauthorized: Missing Token");
//         }

//         const user = await verifyJWT(token);

//         if (!user){
//             throw new CredentialException("Unauthorized: Invalid Token");
//         }

//         req.user = user

//         next();

//     }
//     catch (error) {
//         console.log(error)
//         next(error)
//     }
// }
