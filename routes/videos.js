import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/VideoController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);

//update a video
router.put("/:id", verifyToken, updateVideo);

//delete a video
router.delete("/:id", verifyToken, deleteVideo);

//get a video
router.get("/find/:id", getVideo);

//get a view
router.put("/view/:id", addView);

router.get("/trend", trend);

router.get("/random", random);

router.get("/sub", verifyToken, sub);

router.get("/tags", getByTag);

router.get("/search", search);

export default router;
