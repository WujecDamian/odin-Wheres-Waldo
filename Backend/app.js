import express from "express";
const app = express();

//routers
import levelRouter from "./Routers/levelsRouter.js";

app.use("/api", levelRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000/api`);
});
