import connectDB from "../config/connectDB.js";

export const createMasterPartNumberModels = (data) => {
  const sql = `insert into DTF_M_PARTNUMBER set 
  PART_NO = '${data.PART_NO}', 
  PART_NAME = '${data.PART_NAME}',
  PART_TYPE = '${data.PART_TYPE}', 
  LOT_SIZE = ${data.LOT_SIZE},
  LINE_ID = ${data.LINE_ID},
  QTY_BOX = ${data.QTY_BOX},
  LOT_CODE = '${data.LOT_CODE}',
  SUPP_CODE = '${data.SUPP_CODE}',
  PLANT_NAME = '${data.PLANT_NAME}',
  RCV_GATE = '${data.RCV_GATE}',
  WH_LOC = '${data.WH_LOC}',
  DELV_CYCLE = ${data.DELV_CYCLE},
  STD_MIN_BOX = ${data.STD_MIN_BOX},
  STD_MAX_BOX = ${data.STD_MAX_BOX}`;

  return connectDB.execute(sql);
};

export const getMasterPartNumberModels = () => {
  const sql = `select * from DTF_M_PARTNUMBER`;
  return connectDB.execute(sql);
};

export const updateMasterPartNumberModels = (data) => {
  const sql = `update DTF_M_PARTNUMBER set 
    PART_NAME = '${data.PART_NAME}',
    PART_TYPE = '${data.PART_TYPE}', 
    LOT_SIZE = ${data.LOT_SIZE},
    LINE_ID = ${data.LINE_ID},
    QTY_BOX = ${data.QTY_BOX},
    LOT_CODE = '${data.LOT_CODE}',
    SUPP_CODE = '${data.SUPP_CODE}',
    PLANT_NAME = '${data.PLANT_NAME}',
    RCV_GATE = '${data.RCV_GATE}',
    WH_LOC = '${data.WH_LOC}',
    DELV_CYCLE = ${data.DELV_CYCLE},
    STD_MIN_BOX = ${data.STD_MIN_BOX},
    STD_MAX_BOX = ${data.STD_MAX_BOX} 
    where PART_NO = '${data.PART_NO}'
    `;
  return connectDB.execute(sql);
};

export const getMasterPartNumberByIdModels = (id) => {
  const sql = `select * from DTF_M_PARTNUMBER where PART_NO = '${id}'`;
  return connectDB.execute(sql);
};
