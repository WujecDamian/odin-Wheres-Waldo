import express from "express";

const router = express.Router();

//import controller
import * as logicController from "../Controllers/logicController.js";

router.post("/checkAnswer/level/:gameLevel", logicController.checkAnswer);

//leaderboard logic
router.delete("/leaderboard/level/:gameLevel", logicController.deleteScore);
router.post("/leaderboard/level/:gameLevel", logicController.addScore);

export default router;
