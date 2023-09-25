import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import masterPartNumberRoute from "./src/routes/master_part_number.js";
import masterProductionQtyRoute from "./src/routes/master_prod_qty.js";
import transactionPullingRoute from "./src/routes/trans_pulling.js";
import masterLineRoute from "./src/routes/master_line.js";
import masterMachineRoute from "./src/routes/master_machine.js";
import transactionPullingDetailRoute from "./src/routes/trans_pulling_detail.js";

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/masterPartNumber", masterPartNumberRoute);
app.use("/api/masterProductionQty", masterProductionQtyRoute);
app.use("/api/pulling", transactionPullingRoute);
app.use("/api/line", masterLineRoute);
app.use("/api/machine", masterMachineRoute);
app.use("/api/pullingDetail", transactionPullingDetailRoute);

app.listen(port, () => {
  console.log("Server Already Run On Port " + port);
});
