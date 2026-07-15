import express from "express";

const router = express.Router();

//import controller
import * as levelsController from "../Controllers/levelsController.js";

router.get("/getAllLevels", levelsController.getAllLevels);
router.get("/about", (req, res) => {
  res.send("About birds");
});

export default router;
