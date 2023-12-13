//importar la db//

interface User {
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
    return db.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });
}

export async function getUserByEmail(email: string) {
    return db.user.findUnique({
        where: {
            email: email,
        },
    });
}

export async function createUser(user: User): Promise<any> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return db.user.create({
        data: {
            name: user.name,
            cpf: user.cpf,
            birthdate: user.birthdate,
            mobile: user.mobile,
            photo: user.photo,
            state: user.state,
            city: user.city,
            email: user.email,
            password: hashedPassword

        },
        select: {
            name: true,
            email: true
        }
    });
}