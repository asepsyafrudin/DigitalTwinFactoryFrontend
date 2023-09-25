import { createMasterMachineModels } from "../model/master_machine.js";

export const createMasterMachine = async (req, res) => {
  try {
    await createMasterMachineModels(req.body);
    res.status(200).json({
      msg: "create data success",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create data machine failed",
      errMsg: error,
    });
  }
};

export const deleteMasterMachineById = async (req, res) => {
  try {
    await deleteMasterMachineById(req.params.id);
  } catch (error) {
    res.status(400).json({
      msg: "delete data machine failed",
      errMsg: error,
    });
  }
};
