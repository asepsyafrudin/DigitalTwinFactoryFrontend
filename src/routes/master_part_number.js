import express from "express";
import {
  createMasterPartNumber,
  getMasterPartNumber,
  getMasterPartNumberById,
} from "../controller/master_part_number.js";

const router = express.Router();
router.post("/create", createMasterPartNumber);
router.get("/getAll", getMasterPartNumber);
router.get("/getByPartNo/:id", getMasterPartNumberById);

export default router;
