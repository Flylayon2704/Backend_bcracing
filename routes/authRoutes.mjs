import { AuthController } from "../controllers/authController.mjs";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/register", AuthController.Register);
authRoutes.post("/login", AuthController.Login);

export default authRoutes;