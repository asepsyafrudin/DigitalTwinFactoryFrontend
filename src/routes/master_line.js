import express from "express";
import { createMasterLine, getMasterLine } from "../controller/master_line.js";

const router = express.Router();
router.post("/create", createMasterLine);
router.get("/getAll", getMasterLine);
router.patch("/update", updateMasterLine)

export default router;
