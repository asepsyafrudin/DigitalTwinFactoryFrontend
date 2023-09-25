import {
  createMasterLineModels,
  getMasterLineModels,
} from "../model/master_line.js";
import { getMasterMachineByLineId } from "../model/master_machine.js";

export const createMasterLine = async (req, res) => {
  try {
    await createMasterLineModels(req.body);
    res.status(200).json({
      msg: "create line success",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create line failed",
      errMsg: error,
    });
  }
};

export const getMasterLine = async (req, res) => {
  try {
    const [result] = await getMasterLineModels();
    let arrayData = [];
    if (result.length > 0) {
      for (let index = 0; index < result.length; index++) {
        const [machine] = await getMasterMachineByLineId(result[index].ID);
        const data = { ...result[index], machine: machine };
        arrayData.push(data);
      }
    }
    res.status(200).json({
      msg: "get machine success",
      data: arrayData,
    });
  } catch (error) {
    res.status(400).json({
      msg: "get data failed",
      errMsg: error,
    });
  }
};
