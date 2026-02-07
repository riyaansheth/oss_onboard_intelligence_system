import express from "express";
import { analyzeRepo } from "../controllers/analyze.controller.js";

const router = express.Router();

router.post("/", analyzeRepo);

export default router;
