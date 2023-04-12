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
      columnNames: ['#UserId'],
      enable: true,
      type: 'single',
    },
    {
      selectName: 'UserName',
      columnNames: ['#UserName'],
      enable: true,
      type: 'single',
    },
    {
      selectName: 'date',
      columnNames: ['StartDate', 'EndDate'],
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