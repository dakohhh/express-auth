import express from "express";
import http from "http";
import router from "./router";
import processMiddleware from "./middleware/processes";
import exceptionHandler from "./middleware/exceptionHandler";
import dotenv from 'dotenv'
import { connectDB } from "./db";
import { UnauthorizedException as ExpressUnauthorizedException } from "./express-auth/exceptions";

dotenv.config();

const app = express();

processMiddleware(app);

app.use("/", router());

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
	if (err instanceof ExpressUnauthorizedException) {

		res.status(err.status).json({
			status: false,
			message: err.message,
		});
	}

})

app.use(exceptionHandler);








const server = http.createServer(app);

connectDB()

server.listen(4000, () => {

	console.log(`App runnning on http://localhost:4000/`)

});




