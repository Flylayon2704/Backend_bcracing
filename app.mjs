import express from "express";
import cors from "cors"; 
import authRoutes from "./routes/authRoutes.mjs";
import connectDB from "./config/db.mjs";

const app = express();
app.use(express.json());
app.use(cors());
connectDB(); 

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});