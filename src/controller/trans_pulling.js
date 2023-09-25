import {
  createTransactionPullingModels,
  getTransactionPullingBaseOnPartNumberMonthShiftModels,
} from "../model/trans_pulling.js";
import { getTransactionDetailPullingByPullingIdModels } from "../model/trans_pulling_detail.js";

export const createTransactionPulling = async (req, res) => {
  try {
    await createTransactionPullingModels(req.body);
    res.status(200).json({
      msg: "create transaction success",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create transaction failed",
      errMsg: error,
    });
  }
};

export const getTransactionPullingBaseOnPartNumberMonthShift = async (
  req,
  res
) => {
  try {
    const [result] =
      await getTransactionPullingBaseOnPartNumberMonthShiftModels(req.body);

    let arrayData = [];
    for (let index = 0; index < result.length; index++) {
      let [detailPulling] = await getTransactionDetailPullingByPullingIdModels(
        result[index].ID
      );
      let data = { ...result[index], detail: detailPulling };
      arrayData.push(data);
    }

    res.status(200).json({
      msg: "get transaction pulling success",
      data: arrayData,
    });
  } catch (error) {
    res.status(400).json({
      msg: "get transaction pulling failed",
      errMsg: error,
    });
  }
};
