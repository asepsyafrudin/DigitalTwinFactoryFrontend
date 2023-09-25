import express from "express";
import {
  createMasterMachine,
  deleteMasterMachineById,
} from "../controller/master_machine.js";

const router = express.Router();
router.post("/create", createMasterMachine);
router.delete("/delete/:id", deleteMasterMachineById);

export default router;
