import express from 'express';
import{post} from "../controller/post.js";
const router = express.Router();
router.post("/post",post);
export default router;