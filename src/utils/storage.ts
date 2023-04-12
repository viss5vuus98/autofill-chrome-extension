import { Column } from '../types/dataTypes';
import { FillData } from '../types/dataTypes';

export interface localStorageData {
  data?: FillData[];
}

export function setStorage(data: FillData[]): Promise<void> {
  const setData: localStorageData = {
    data,
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(setData , () => {
      resolve();
    })
  })
}

export function getStorage(): Promise<FillData[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get(['data'], (res: localStorageData) => {
      resolve(res.data)
    })
  })
}

export function setColumnsData(data: Array<Column>): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ columns: data } , () => {
      resolve();
    })
  })
}

export function getColumnsData(): Promise<Array<Column>> {
  return new Promise((resolve) => {
    chrome.storage.local.get(['columns'], (res) => {
      const columnsData = res.columns ? res.columns : []
      console.log('res:', columnsData)
      resolve(columnsData)
    })
  })
}