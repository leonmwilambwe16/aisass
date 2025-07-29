import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRoute from "./route/aiRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./route/userRoute.js";

dotenv.config();

const app = express();

async function startServer() {
  try {
    await connectCloudinary();

    app.use(clerkMiddleware());
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => res.send("server is live!"));

    app.use(requireAuth());

    app.use("/api/ai", aiRoute);
    app.use("/api/user", userRouter);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

startServer();
