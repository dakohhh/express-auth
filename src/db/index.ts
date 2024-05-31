import mongoose from "mongoose";
import config from '../config';


export const connectDB = ()=>{

    const MONGO_URL = config.database

    mongoose.Promise = Promise

    mongoose.connect(MONGO_URL);

    mongoose.connection.on("error", (error: Error) => {

        console.log(error);
    })


}