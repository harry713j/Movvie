import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

routes.forEach((r) => app.use(r.route, r.router));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send(`"Internal Server Error" : ${err.message}`);
});

const PORT = process.env.PORT;

app.listen(PORT || 8080, () => {
  console.log(`app is listening: http://localhost:${PORT}`);
});
