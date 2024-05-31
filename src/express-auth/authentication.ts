import { Request, Response, NextFunction } from "express";
import {
  ExpressAuthImplementationException,
  UnauthorizedException,
} from "./exceptions";
import { getAuthorizationHeader, decodeBasicAuthCredectials } from "./utils";
import { IAbstractUser } from "./types";

export interface AuthenticatedRequest extends Request {
  user?: IAbstractUser;
}

class ExpressBaseAuthentication {}

export class ExpressAuthUsernameAndPassword extends ExpressBaseAuthentication {
  // .authenticate() checks if the 'username' and 'password' exists in the request body

  authenticate(
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ) {
    const { username, password } = request.body;

    if (!username || !password)
      throw new UnauthorizedException(
        "Unauthorized: username or password is missing"
      );

    next();
  }
}

export class ExpressBasicAuthentication extends ExpressBaseAuthentication {
  realm: string = "api";

  authenticate(
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ) {
    const authHeader = getAuthorizationHeader(request);
    if (!authHeader) {
      throw new UnauthorizedException(
        "No auth header found for basic authentication."
      );
    }
    const auth: string[] = authHeader.split(" ");

    if (!auth || auth[0] !== "Basic") {
      throw new UnauthorizedException(
        "Invalid token or not specified for basic authtication, Check whether 'Basic' is specified on the Authorization header "
      );
    }
    // request.user;

    const creds = decodeBasicAuthCredectials(auth[1]).split(":");

    next();
  }
}

export class ExpressTokenAuthentication {}

export class ExpressBearerAuthentication {}

export class ExpressSessionAuthentication extends ExpressBaseAuthentication {}
