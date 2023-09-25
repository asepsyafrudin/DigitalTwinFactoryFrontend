import connectDB from "../config/connectDB.js";

export const createTransactionDetailPullingModels = (data) => {
  const sql = `insert into DTF_T_DETAIL_PULLING SET
    PULLING_ID = ${data.PULLING_ID},
    INNER_TAG = '${data.INNER_TAG}',
    QTY = ${data.QTY},
    `;

  return connectDB.execute(sql);
};

export const getTransactionDetailPullingByPullingIdModels = (id) => {
  const sql = `select * from DTF_T_DETAIL_PULLING 
    WHERE PULLING_ID = ${id}`;
  return connectDB.execute(sql);
};

export const deleteTransactionDetailPullingByIdModels = (id) => {
  const sql = `delete from DTF_T_DETAIL_PULLING 
    where ID = ${id}`;
  return connectDB.execute(sql);
};
