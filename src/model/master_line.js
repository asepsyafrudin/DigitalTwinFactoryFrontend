import connectDB from "../config/connectDB.js";

export const createMasterLineModels = (data) => {
  const sql = `insert into DTF_M_LINE SET
    LINE_NAME = '${data.LINE_NAME}'
    `;

  return connectDB.execute(sql);
};

export const getMasterLineModels = () => {
  const sql = `select * from DTF_M_LINE`;
  return connectDB.execute(sql);
};
