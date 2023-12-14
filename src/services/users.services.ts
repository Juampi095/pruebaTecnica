import bcrypt from 'bcrypt';
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

export async function getUserById(id: string) {
    return User.findOne({
        where: {
            id: parseInt(id),
        },
    });
}

export async function getUserByEmail(email: string) {
    return User.findOne({
        where: {
            email: email,
        },
    });
}

export async function createUser(user: UserInterface): Promise<any> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return await User.create({

        name: user.name,
        cpf: user.cpf,
        birthdate: user.birthdate,
        mobile: user.mobile,
        photo: user.photo,
        state: user.state,
        city: user.city,
        email: user.email,
        password: hashedPassword
    });
}