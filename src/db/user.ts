import mongoose, { Schema } from "mongoose";
import { AbstractUserSchema } from "../express-auth/models";
import { IAbstractUser } from "../express-auth/types";


export interface IUser extends IAbstractUser{
    test_field:string;
}


export const UserSchema = new Schema<IUser>({
    ...AbstractUserSchema.obj,
    test_field: { type: String }}

)


// Specify Whether using 'username' or 'email' for authorization
UserSchema.virtual("USERNAME_FIELD").get(()=>{
    return "username";
});



export const UserModel = mongoose.model<IUser>("User", UserSchema);




// CRUD OPERATIONS

export const createuser = async (values: Record<string, any>)=>{
    const newUser = new UserModel(values)

    await newUser.save()

    return newUser.toObject();

}