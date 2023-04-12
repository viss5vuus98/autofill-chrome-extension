import { FillData } from "../../types/dataTypes";

export const loadAllFillData = (payload: FillData[]) => {
  return {
    type: 'LOAD_ALL_FILL_DATA',
    payload,
  };
}

export const updateFillData = (payload: FillData[]) => {
  return {
    type: 'UPDATE_FILL_DATA',
    payload,
  };
}