import express from "express"
import 
{ 
    BadRequestException,
    UnauthorizedException, 
    ServerErrorException, 
    NotFoundException,
    ForbiddenException,
    CredentialException,
} from "../helpers/exceptions";

export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {

	if (err instanceof BadRequestException || 
		err instanceof UnauthorizedException || 
		err instanceof ServerErrorException || 
		err instanceof NotFoundException || 
		err instanceof ForbiddenException || 
		err instanceof CredentialException) {

		res.status(err.statusCode).json({
			status: false,
			message: err.message,
			data: err.data,
		});
	}
	else {
		// Handling other types of errors
		res.status(500).json({
			status: false,
			message: 'Internal Server Error',
			data: null
		});
	}
};

