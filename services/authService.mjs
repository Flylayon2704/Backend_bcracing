import userSchema from "../models/userSchema.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
    static async Register(userData) {
        const { email, password } = userData;

        const existingUser = await userSchema.findOne({ email });
        if (existingUser) throw new Error('El usuario ya existe');

        const hashedPassword = await bcrypt.hash(password, 13);

        const user = new userSchema({
            ...userData,
            password: hashedPassword
        });

        await user.save();
        return user;
    }

    static async Login(email, password) {
        const userExists = await userSchema.findOne({ email });
        if (!userExists) throw new Error('El usuario no existe');

        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if (!isPasswordValid) throw new Error('La contraseña es incorrecta');

        return this.generateToken(userExists);
    }

    static generateToken(user) {
        return jwt.sign(
            { id: user._id, email: user.email },
            'your_jwt_secret_key',
            { expiresIn: '1h' }
        )
    }
}