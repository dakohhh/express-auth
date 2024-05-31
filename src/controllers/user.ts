import express from "express";
// import { AuthenticatedRequest } from "../middleware/authenticate";

export const getAuthenticatedUser = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  try {

    response.json({message: "it works"})
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};
