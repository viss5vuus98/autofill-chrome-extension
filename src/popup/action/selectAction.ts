import { Column } from '../../types/dataTypes';

export const selectAdd = () => {
  return {
    type: 'SELECT_ADD',
  };
}

export const selectDelete = (index: number) => {
  return {
    type: 'SELECT_DELETE',
    index,
  };
}

export const selectUpdate = (data: Column[]) => {
  return {
    type: 'SELECT_UPDATE',
    data,
  };
}

export const selectEnable = (index: number, enable: boolean) => {
  return {
    type: 'SELECT_ENABLE',
    index,
    enable,
  };
}

export const setSelectData = (data: Column[]) => {
  return {
    type: 'SET_SELECT_DATA',
    data,
  };
}