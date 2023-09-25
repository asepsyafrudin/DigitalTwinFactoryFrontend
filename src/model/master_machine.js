import connectDB from "../config/connectDB.js";

export const createMasterMachineModels = (data) => {
  const sql = `insert into DTF_M_MACHINE set 
    LINE_ID = ${data.LINE_ID},
    MACHINE_NAME = '${data.MACHINE_NAME}'
    `;

  return connectDB.execute(sql);
};

export const deleteMasterMachineModels = (id) => {
  const sql = `delete from DTF_M_MACHINE where ID = ${id}`;
  return connectDB.execute(sql);
};

export const getMasterMachineByLineId = (id) => {
  const sql = `select * from DTF_M_MACHINE where LINE_ID = ${id}`;
  return connectDB.execute(sql);
};
