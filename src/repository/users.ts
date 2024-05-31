// import { UserModel } from "../db/users";

// // Repository

// export class UserRepository {
//   static async getUsers() {
//     return UserModel.find();
//   }

//   static async getUserByEmail(email: string) {
//     return UserModel.findOne({ email });
//   }

//   static async getUserById(userId: string) {
//     return UserModel.findById(userId);
//   }

//   static async createUser(values: Record<string, any>) {
//     return new UserModel(values).save().then((user) => {
//       const { password, ...userObject } = user.toObject();
//       return userObject;
//     });
//   }

//   static async deleteUserById(userId: string) {
//     return UserModel.findOneAndDelete({ _id: userId });
//   }

//   static async updateUserById(userId: string, values: Record<string, any>) {
//     return UserModel.findByIdAndUpdate(userId, values);
//   }
// }
