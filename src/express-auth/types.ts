import { Document } from 'mongoose';

// Define the TypeScript interface for the AbstractUser
export interface IAbstractUser extends Document {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff?: boolean;
    is_active?: boolean;
    date_joined?: Date;
    password: string;
}

