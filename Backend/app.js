import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//routers
import levelRouter from "./Routers/levelsRouter.js";

app.use("/api", levelRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000/api`);
});
