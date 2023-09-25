import express from "express";
import {
  createProductionQty,
  deleteProductionQty,
  getProductionQty,
  updateMasterProductionQty,
} from "../controller/master_prod_qty.js";

const router = express.Router();
router.post("/create", createProductionQty);
router.patch("/update", updateMasterProductionQty);
router.delete("/delete/:id", deleteProductionQty);
router.get("/getAll", getProductionQty);

export default router;
