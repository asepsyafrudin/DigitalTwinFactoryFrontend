import {
  createMasterPartNumberModels,
  getMasterPartNumberByIdModels,
  getMasterPartNumberModels,
  updateMasterPartNumberModels,
} from "../model/master_part_number.js";

export const createMasterPartNumber = async (req, res) => {
  try {
    const [result] = await getMasterPartNumberModels();
    let update = false;
    for (let index = 0; index < result.length; index++) {
      if (result[index].PART_NO === req.body.PART_NO) {
        update === true;
      }
    }

    if (update) {
      await updateMasterPartNumberModels(req.body);
    } else {
      await createMasterPartNumberModels(req.body);
    }
    res.status(200).json({
      msg: "insert data success",
      data: req.data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "insert data failed",
      errMsg: error,
    });
  }
};

export const getMasterPartNumber = async (req, res) => {
  try {
    const [result] = await getMasterPartNumberModels();
    res.status(200).json({
      msg: "get data success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      msg: "get data failed",
      errMsg: error,
    });
  }
};

export const getMasterPartNumberById = async (req, res) => {
  try {
    const [result] = await getMasterPartNumberByIdModels(req.params.id);
    res.status(200).json({
      msg: "get data success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      msg: "get data failed",
      data: result,
    });
  }
};

