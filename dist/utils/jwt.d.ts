import jsonwebtoken from "jsonwebtoken";
interface User {
    name: string;
    cpf: string;
    birthdate: Date;
    mobile: string;
    photo: string;
    state: string;
    city: string;
    email: string;
    password: string;
}
export declare const generateToken: (user: User) => string;
export declare const verifyToken: (token: string) => string | jsonwebtoken.JwtPayload;
export {};
