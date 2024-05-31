import bcrypt from "bcrypt";

interface IHashing {
    salt:number
    hashPassword: (password:string) => Promise<string>
    checkPassword: (inputPassword: string, password: string) => Promise<boolean>
}


export class Hashing implements IHashing {
  salt: number = 10;

  constructor(salt?: number) {
    if (salt) this.salt = salt;
  }

  async hashPassword(password: string): Promise<string> {
    if (typeof password != "string") console.log("password must be a string");

    return bcrypt.hash(password, this.salt);
  }

  async checkPassword(inputPassword: string, password: string): Promise<boolean> {
    return bcrypt.compareSync(inputPassword, password);
  }
}
