import {
  createMasterProductionQtyModels,
  deleteMasterProductionQtyModels,
  getMasterProductionQtyModels,
  updateMasterProductionQtyModels,
} from "../model/master_prod_qty.js";

export const createProductionQty = async (req, res) => {
  try {
    await createMasterProductionQtyModels(req.data);
    res.status(200).json({
      msg: "create data success",
      data: req.data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create data failed",
      errMsg: error,
    });
  }
};

export const deleteProductionQty = async (req, res) => {
  try {
    await deleteMasterProductionQtyModels(req.params.id);
    res.status(200).json({
      msg: "delete data success",
      data: req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      msg: "delete data failed",
      errMsg: error,
    });
  }
};

export const getProductionQty = async (req, res) => {
  try {
    const [result] = await getMasterProductionQtyModels();
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

export const updateMasterProductionQty = async (req, res) => {
  try {
    await updateMasterProductionQtyModels(req.body);
    res.status(200).json({
      msg: "update data success",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "update data failed",
      errMsg: error,
    });
  }
};
