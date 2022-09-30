import express from 'express';
import {
  dislike,
  getUser,
  like,
  deleteUser,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/UserController.js";
import { verifyToken } from '../verifyToken.js';

const router = express.Router();


//update user
router.put('/:id', verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//subscriber user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscriber user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike video
router.put("/dislike/:videoId", verifyToken, dislike);



export default router;