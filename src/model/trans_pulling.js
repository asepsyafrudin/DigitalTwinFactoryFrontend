import connectDB from "../config/connectDB.js";

export const createTransactionPullingModels = (data) => {
  const sql = `insert into DTF_T_PULLING set 
    TIME_START = '${data.TIME_START}',
    PART_NO = '${data.PART_NO}',
    STATUS = '${data.STATUS}',
    TIME_FINISH = '${data.TIME_FINISH}',
    DAY= '${data.DAY_YEAR}',
    MONTH = '${data.MONTH}',
    YEAR = '${data.YEAR}',
    SHIFT = ${data.SHIFT}
    `;

  return connectDB.execute(sql);
};

export const updateStatusTransactionModels = (id) => {
  const sql = `UPDATE DTF_T_PULLING SET
    STATUS = 'complete' where ID = ${id}
    `;
};

export const getTransactionPullingBaseOnPartNumberMonthShiftModels = (data) => {
  const sql = `select * from DTF_T_PULLING`;
  return connectDB.execute(sql);
};
