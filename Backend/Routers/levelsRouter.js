import express from "express";

const router = express.Router();

//import controller
import * as levelsController from "../Controllers/levelsController.js";

router.get("/getAllLevels", levelsController.getAllLevels);
router.get("/getLevel/:gameLevel", levelsController.getLevel);

export default router;
