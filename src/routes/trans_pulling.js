import express from "express";
import {
  createTransactionPulling,
  getTransactionPullingBaseOnPartNumberMonthShift,
} from "../controller/trans_pulling.js";

const router = express.Router();
router.post("/create", createTransactionPulling);
router.post(
  "/getTransactionPulling",
  getTransactionPullingBaseOnPartNumberMonthShift
);

export default router;
