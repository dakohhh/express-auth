import express from "express"
import { getAuthenticatedUser, createUser } from "../controllers/user"
// import authenticate from "../middleware/authenticate";
import { ExpressBasicAuthentication } from "../express-auth/authentication";
import { UserModel } from "../db/user";

const auth = new ExpressBasicAuthentication(UserModel);


export default (router:express.Router) => {
    router.post("/user",  createUser);
    router.get("/user", auth.authenticate.bind(auth),  getAuthenticatedUser);
    
}