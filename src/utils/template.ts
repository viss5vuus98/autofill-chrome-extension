import { Column, FillData } from '../types/dataTypes'
// export interface Array<SingleColumn> {
//   [index: number ]: SingleColumn;
//   length: number;
// }

// export interface Array<PairColumn> {
// }

export const SelectDefaultData: Column[] = [
    {
      selectName: 'UserId',
      ColumnNames: ['#UserId'],
      enable: true,
      type: 'single',
    },
    {
      selectName: 'UserName',
      ColumnNames: ['#UserName'],
      enable: true,
      type: 'single',
    },
    {
      selectName: 'date',
      ColumnNames: ['StartDate', 'EndDate'],
      enable: true,
      type: 'pair',
    },
]

export const FillDefaultData: FillData[] = [
    {
      key: '#UserId',
      value: '1',
    },
    {
      key: '#UserName',
      value: 'SODADM',
    },
    {
      key: 'StartDate',
      value: '2020/01/01',
    },
    {
      key: 'EndDate',
      value: '2020/01/01',
    },
]