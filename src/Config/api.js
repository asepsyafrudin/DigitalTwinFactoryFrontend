const port = "http://172.31.71.6:4000";

//api part master part number
export const createMasterPartNumberApi = `${port}/api/masterPartNumber/create`;
export const getAllMasterPartNumberApi = `${port}/api/masterPartNumber/getAll`;
export const getMasterPartNumberByPartNoApi = (id) => {
  return `${port}/api/masterPartNumber/getByPartNo/${id}}`;
};

//api master production qty
export const createMasterProductionQtyApi = `${port}/api/masterProductionQty/create`;
export const updateMasterProductionQtyApi = `${port}/api/masterProductionQty/update`;
export const getMasterProductionQtyApi = `${port}/api/masterProductionQty/getAll`;

//api master line
export const createMasterLineApi = `${port}/api/line/create`;
export const getAllMasterLineAPi = `${port}/api/line/getAll`;

//api master machine
export const crateMasterMachineApi = `${port}/api/machine/create`;
export const deleteMasterMachineByIdApi = (id) => {
  return `${port}/api/machine/delete/${id};`;
};

//api pulling
export const createTransactionPullingApi = `${port}/api/pulling/create`;
export const getTransactionPullingApi = `${port}/api/pulling/getTransactionPulling`;
