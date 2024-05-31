// import jwt, { TokenExpiredError } from "jsonwebtoken"
// import { Payload } from "../types/jwt"
// import config from "../config";
// import { ForbiddenException } from "../helpers/exceptions";

// import { getUserById } from "../repository/users";



// export const createJWT = (data: Payload): string => {
//     const token = jwt.sign(data, config.secret_key);

//     return token;
// };



// export const verifyJWT = async (token: string) => {
//     try {
//         const payload = jwt.verify(token, config.secret_key) as Payload;

//         const user = await getUserById(payload.userId);

//         return user;

//     } catch (error) {

//         console.log(error)

//         if (error instanceof TokenExpiredError) {
//             throw new ForbiddenException("Access Forbidden: Token is expired, please log in again");
//         }

//         return null; 
//     }
// };



// export const createTokenData = (userId: string): Payload => {
//     const tokenData: Payload = {
//         userId: userId,
//         iat: Math.floor(Date.now() / 1000), // Add 'iat' (issued at)
//         exp: Math.floor(Date.now() / 1000) + (60 * 60), // Add 'exp' (expiration time)
//     };

//     return tokenData
// }