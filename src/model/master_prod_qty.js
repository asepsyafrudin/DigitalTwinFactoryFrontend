import connectDB from "../config/connectDB.js";

export const createMasterProductionQtyModels = (data) => {
  const sql = `insert into DTF_M_PROD_QTY SET
    MONTH_YEAR = '${data.MOMTH_YEAR}',
    WORKING_DAY = ${data.WORKING_DAY},
    PART_NO = '${data.PART_NO}'
    `;

  return connectDB.execute(sql);
};

export const deleteMasterProductionQtyModels = (id) => {
  const sql = `delete from DTF_M_PROD_QTY where ID = ${id}`;
  return connectDB.execute(sql);
};

export const getMasterProductionQtyModels = () => {
  const sql = `select * from DTF_M_PROD_QTY`;
  return connectDB.execute(sql);
};

export const updateMasterProductionQtyModels = (data) => {
  const sql = ` update DTF_M_PROD_QTY SET
MONTH_YEAR = '${data.MOMTH_YEAR}',
WORKING_DAY = ${data.WORKING_DAY},
PART_NO = '${data.PART_NO}',
where ID = ${data.ID}`;

  return connectDB.execute(sql);
};
