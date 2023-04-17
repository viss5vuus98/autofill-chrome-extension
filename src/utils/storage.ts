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
      const fillData: FillData[] = res.data ? res.data : []
      resolve(fillData)
    })
  })
}

export function setColumnsData(data: Column[]): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ columns: data } , () => {
      resolve();
    })
  })
}

export function getColumnsData(): Promise<Column[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get(['columns'], (res) => {
      const columnsData: Column[] = res.columns ? res.columns : []
      resolve(columnsData)
    })
  })
}

