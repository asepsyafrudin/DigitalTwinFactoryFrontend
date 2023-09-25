import express from "express";
import {
  createTransactionDetailPulling,
  deleteTransactionDetailPulling,
} from "../controller/trans_pulling_detail.js";

const router = express.Router();
router.post("/create", createTransactionDetailPulling);
router.delete("/delete/:id", deleteTransactionDetailPulling);

export default router;
