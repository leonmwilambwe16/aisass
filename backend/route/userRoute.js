import express from "express";
import { auth } from "../middlewares/auth.js";
import { getPuplishedCreation, getUserCreation, ToggleLikeCreation } from "../controller/userController.js";

const userRouter = express.Router()

userRouter.get('/get-user-creation',auth,getUserCreation)
userRouter.get('/get-published-creation',auth,getPuplishedCreation)
userRouter.post('/toggle-like-creation',auth,ToggleLikeCreation)

export default userRouter