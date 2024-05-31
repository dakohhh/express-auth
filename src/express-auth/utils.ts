import express, { Express } from "express";
import { HTTP_HEADER_ENCODING } from "express-auth";
import base64 from "base-64";

export const getAuthorizationHeader = (request: express.Request) => {
  const authHeader = request.headers["authorization"] as string;

  return authHeader;
};

export const decodeBasicAuthCredectials = (creds:string) => {
  return base64.decode(creds);
};
