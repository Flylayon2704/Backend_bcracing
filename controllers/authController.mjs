import { AuthService } from "../services/authService.mjs";

export class AuthController {
    static async Register(req, res) {
        try {
            const user = await AuthService.Register(req.body);
            res.status(201).json({
                message: "Usuario registrado correctamente",
                user,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    static async Login(req,res){
        try {
            const { email, password } = req.body;
            const token = await AuthService.Login(email, password);
            res.status(200).json({
                message: "Inicio de sesión exitoso",
                token,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    

    
}