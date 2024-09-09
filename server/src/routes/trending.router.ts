import express from "express";
import { trendingController } from "../controllers/index";

const router = express.Router();

router.get("/all", trendingController.getAll);

export { router as trendingRouter };
