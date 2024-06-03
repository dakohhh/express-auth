import { Request } from 'express';
import { Document } from 'mongoose';

// Define the TypeScript interface for the AbstractUser
export interface IAbstractUser extends Document {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    is_staff?: boolean;
    is_active?: boolean;
    date_joined?: Date;
    password: string;
    USERNAME_FIELD: string
}


export interface AuthenticatedRequest extends Request {
    user?: IAbstractUser;
    isAuthenticated?: boolean;
}

export interface BasicAuthCredectials {
    username: string;
    password: string;
}  