import {
  createTransactionDetailPullingModels,
  deleteTransactionDetailPullingByIdModels,
} from "../model/trans_pulling_detail.js";

export const createTransactionDetailPulling = async (req, res) => {
  try {
    await createTransactionDetailPullingModels(req.body);
    res.status(200).json({
      msg: "create detail transaction success",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create detail transaction failed",
      errMsg: error,
    });
  }
};

export const deleteTransactionDetailPulling = async (req, res) => {
  try {
    await deleteTransactionDetailPullingByIdModels(req.params.id);
    res.status(200).json({
      msg: "delete detail transaction sucess",
      data: req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      msg: "delete transaction failed",
      errMsg: error,
    });
  }
};
