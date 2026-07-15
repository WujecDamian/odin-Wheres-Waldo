import express from "express";

const router = express.Router();

//import controller
import levelsController from "../Controllers/levelsController.js";

router.get("/", levelsController.getLevels);
router.get("/about", (req, res) => {
  res.send("About birds");
});

export default router;
