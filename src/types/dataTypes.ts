export interface FillData {
  key?: string;
  value?: string;
}

export interface Column {
  selectName: string;
  ColumnNames: string[];
  enable: boolean;
  type: string;
}

export interface AllState {
  columns: Column[];
  fillData: FillData[];
}