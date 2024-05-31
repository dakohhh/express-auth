import { Express } from "express";
import cors from "cors";
import morgan from "morgan"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import exceptionHandler from "./exceptionHandler";


export default async (app: Express) => {

    app.use(cors({
        credentials: true
    }));

    app.use(morgan("tiny"))

    app.use(compression());

    app.use(cookieParser());

    app.use(bodyParser.json());
} 