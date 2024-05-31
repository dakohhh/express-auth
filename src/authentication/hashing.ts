import bcrypt from 'bcrypt'




export const hashPassword = (password: string): string => {

    if (typeof (password) != "string")
        console.log("password must be a string")

    return bcrypt.hashSync(password, 10);
}



export const checkPassword = (inputPassword: string, password: string): boolean => {

    return bcrypt.compareSync(inputPassword, password)

}