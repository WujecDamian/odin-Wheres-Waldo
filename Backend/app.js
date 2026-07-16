import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//routers
import levelRouter from "./Routers/levelsRouter.js";
import logicRouter from "./Routers/logicRouter.js";

app.use("/api/level", levelRouter);
app.use("/api/logic", logicRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000/api`);
});
