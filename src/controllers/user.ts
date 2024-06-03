import express from "express";
import { createuser } from "../db/user";
import { AuthenticatedRequest } from "express-auth/types";

export const getAuthenticatedUser = async (
  request: AuthenticatedRequest,
  response: express.Response,
  next: express.NextFunction
) => {
  try {

   response.send("Hello world");
  } catch (error) {
    console.log(error);
    next(error);
  }
};




export const createUser = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  try {

    const user = await createuser({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
      test_field: request.body.test_field
      
    });

    response.json({message: "it works", user_obj: user})
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

