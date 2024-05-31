import dotenv from 'dotenv'
dotenv.config();



const config = {
    development: {
        // Development environment settings
        port: process.env.PORT || 3000,
        database: process.env.DEV_MONGO_URL,
        secret_key: process.env.SECRET_KEY
    },

    production: {
        // Production environment settings
        port: process.env.PORT || 3000,
        database: process.env.PROD_MONGO_URL,
        secret_key: process.env.SECRET_KEY

    },
};


const environment: string  = process.env.DEV? "development" : "production";

export default config[environment as keyof typeof config]

