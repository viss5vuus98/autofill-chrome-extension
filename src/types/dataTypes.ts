// This file contains all the types used in the application

//自動輸入的資料
//Key: 目標的欄位名稱
//Value: 要填入的資料
export interface FillData {
  root: string;
  key: string;
  value: string;
  enable: boolean;
}

//欄位類型
//selectName: 選擇的欄位類型名稱(例如: Date) =>可自訂
//columnNames: 對應的欄位名稱(例如: Date類型有: StartDate, EndDate兩個欄位; 或UserName類型只有一個欄位) =>需要對應實際DOM欄位名稱
//enable: 是否啟用
//type: 類別對應單欄位或雙欄位格式(single: 單欄位, pair: 雙欄位)
export interface Column {
  selectName: string;
  columnNames: string[];
  enable: boolean;
  type: string;
}
//redux state type
export interface AllState {
  columns: Column[];
  fillData: FillData[];
}

//新增欄位的表單
export interface CreateColumnForm {
  selectName: string;
  selectItem: string[];
  id: number;
}

