import { User } from '../models/user.model';
export interface UserInterface {
    id: number;
    name: string;
    cpf: string;
    birthdate: string;
    mobile: string;
    photo: string;
    state: string;
    city: string;
    email: string;
    password: string;
}
export declare function getUserById(id: string): Promise<User | null>;
export declare function getUserByEmail(email: string): Promise<User | null>;
export declare function createUser(user: UserInterface): Promise<any>;
