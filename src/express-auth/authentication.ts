import { Request, Response, NextFunction } from "express";
import mongoose, { Model, Schema } from "mongoose";
import { UnauthorizedException } from "./exceptions";
import { getAuthorizationHeader, decodeBasicAuthCredectials } from "./utils";
import { IAbstractUser } from "./types";
import { AuthenticatedRequest, BasicAuthCredectials } from "./types";
import { Hashing } from "./hashing";

class ExpressBaseAuthentication<T extends IAbstractUser> {
  auth_model: Model<T>;

  constructor(auth_model: Model<T>) {
    this.auth_model = auth_model;
  }
}

export class ExpressBasicAuthentication<
  T extends IAbstractUser
> extends ExpressBaseAuthentication<T> {
  realm: string = "api";

  constructor(auth_model: Model<T>) {
    super(auth_model);
  }

  async authenticate(
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ) {

		try{
			const authHeader = getAuthorizationHeader(request);
			if (!authHeader) {
				throw new UnauthorizedException(
					"Invalid basic header. No credentials provided.'"
				);
			}
			const auth: string[] = authHeader.split(" ");
	
			if (!auth || auth[0] !== "Basic") {
				response.header("WWW-Authenticate", `Basic realm="user_pages"`);
				throw new UnauthorizedException(
					"Invalid basic header or not specified for basic authtication, Check whether 'Basic' is specified on the Authorization header "
				);
			}
	
			const _ = decodeBasicAuthCredectials(auth[1]).replace(" ", "").split(":");
	
			const credentials: BasicAuthCredectials = {
				username: _[0],
				password: _[1],
			};
			const user = await this.authenticateCredentails(credentials);
	
			request.user = user;
			request.isAuthenticated = true;

			response.header("WWW-Authenticate", `Basic realm="${this.realm}"`);
	
			next();

		} catch (error) {
			next(error);
		}
   
  }

  async authenticateCredentails(credentials: BasicAuthCredectials) {
    const user = await this.auth_model.findOne({
      username: credentials.username,
    });

    const hash = new Hashing();

		if (!user || !(await hash.checkPassword(credentials.password, user.password))) {
      throw new UnauthorizedException("Invalid username or password");
    }

		return user;

  }
}

// export class ExpressAuthUsernameAndPassword extends ExpressBaseAuthentication {
//   // .authenticate() checks if the 'username' and 'password' exists in the request body

//   authenticate(
//     request: AuthenticatedRequest,
//     response: Response,
//     next: NextFunction
//   ) {
//     const { username, password } = request.body;

//     if (!username || !password)
//       throw new UnauthorizedException(
//         "Unauthorized: username or password is missing"
//       );

//     next();
//   }
// }

export class ExpressTokenAuthentication {}

export class ExpressBearerAuthentication {}

export class ExpressSessionAuthentication {}
