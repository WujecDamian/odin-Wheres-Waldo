import express from "express";

const router = express.Router();

//import controller
import * as logicController from "../Controllers/logicController.js";

router.post("/checkAnswer/level/:gameLevel", logicController.checkAnswer);

export default router;
