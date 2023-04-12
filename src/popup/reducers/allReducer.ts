import { combineReducers } from 'redux'
import { FillData, AllState, Column } from "../../types/dataTypes";

const initialState: AllState = {
  columns:[],
  fillData: [],
};

const selectReducer = (state: Column[] = initialState.columns, action: any) => {
  switch (action.type) {
    case "SELECT_ADD":
      // add a new select item
      return state;
    case "SELECT_DELETE":
      return state;
    case "SELECT_UPDATE":
      return state;
    case "SELECT_ENABLE":
      return state;
    case "SET_SELECT_DATA":      
      return [ ...action.data ]
    default:
      return state;
  }
}

const fillDataReducer = (state: FillData[] = initialState.fillData, action: any) => {
  switch (action.type) {
    case "ADD_FILL_DATA":
      return [...state, action.payload];
    case "UPDATE_FILL_DATA":
      return [ ...action.payload ]
    case "ENABLE_FILL_DATA":
      return state.filter((column: any, index: number) => index !== action.payload);
    case "DELETE_FILL_DATA":
      return state.filter((column: any, index: number) => index !== action.payload);
    case "LOAD_ALL_FILL_DATA":
      return [ ...action.payload ]
    default:
      return state;
  }
}

const allReducer = combineReducers({
  columns: selectReducer,
  fillData: fillDataReducer,
});

export default allReducer;
