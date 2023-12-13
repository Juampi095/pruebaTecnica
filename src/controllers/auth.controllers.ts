import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { sendActivationEmail } from '../utils/email';

const authController = {
    async logIn(req: Request, res: Response) {
        const { email, password } = req.body;

        try {

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ message: 'Email or password is incorrect.' });
            }


            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(401).json({ message: 'Email or password is incorrect.' });
            }


            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '168h' });


            const photo = await user.getPhoto();


            return res.json({ token, photo });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },
    async register(req: Request, res: Response) {
        const { name, cpf, birthDate, mobile, photo, state, city, email, password } = req.body;

        try {

            const existingUser = await User.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists.' });
            }


            const newUser = new User({
                name,
                cpf,
                birthDate,
                mobile,
                photo,
                state,
                city,
                email,
                password: await bcrypt.hash(password, 10), // Hash de la contraseña antes de guardarla
            });


            const savedUser = await newUser.save();


            await sendActivationEmail(savedUser.email);

            return res.status(201).json({ message: 'User created successfully.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },


};

export default authController;
