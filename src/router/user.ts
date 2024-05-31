import express from "express"
import { getAuthenticatedUser } from "../controllers/user"
// import authenticate from "../middleware/authenticate";
import { ExpressBasicAuthentication } from "../express-auth/authentication";


const auth = new ExpressBasicAuthentication();


export default (router:express.Router) => {
    router.post("/user", auth.authenticate,  getAuthenticatedUser);
    
}