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

export const selectUpdate = (index: number, key: string, value: string) => {
  return {
    type: 'SELECT_UPDATE',
    index,
    key,
    value,
  };
}

export const selectEnable = (index: number, enable: boolean) => {
  return {
    type: 'SELECT_ENABLE',
    index,
    enable,
  };
}

export const setSelectData = (data: any) => {
  return {
    type: 'SET_SELECT_DATA',
    data,
  };
}