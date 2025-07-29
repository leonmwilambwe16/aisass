import express from "express";
import {auth} from '../middlewares/auth.js'
import { generateArticle, generateBlogTitle, generateImage } from "../controller/aiController.js";


const aiRoute = express.Router()

aiRoute.post('/generate-article',auth,generateArticle)
aiRoute.post('/generate-blog-title',auth,generateBlogTitle)
aiRoute.post('/generate-image',auth,generateImage)

export default aiRoute