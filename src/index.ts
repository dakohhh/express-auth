import express from "express";
import http from "http";
import router from "./router";
import processMiddleware from "./middleware/processes";
import exceptionHandler from "./middleware/exceptionHandler";
import dotenv from 'dotenv'
import { connectDB } from "./db";
import { UnauthorizedException } from "./express-auth/exceptions";

dotenv.config();

const app = express();

processMiddleware(app);


app.use("/", router());


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.error(err);  // Log the error for debugging
  
	if (err instanceof UnauthorizedException) {
	  res.status(err.status).json({
		status: false,
		message: err.message,
	  });
	} else {
	  res.status(500).json({
		status: false,
		message: 'Internal Server Error',
	  });
	}
  });



app.use(exceptionHandler);








const server = http.createServer(app);

connectDB()

server.listen(4000, () => {

	console.log(`App runnning on http://localhost:4000/`)

});




