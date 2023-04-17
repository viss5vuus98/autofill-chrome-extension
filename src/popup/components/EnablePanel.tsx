import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFillData } from '../action/fillDataAction';
import { selectUpdate } from '../action/selectAction';
import { Column, FillData, AllState } from '../../types/dataTypes'
import { setStorage, setColumnsData } from '../../utils/storage'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SwitchContainer from './SwitchContainer';

const EnablePanel: React.FC = () => {
  const [ rowList, setRowList ] = useState<React.ReactNode[]>([])
  const fillDataList = useSelector((state: AllState) => state.fillData)
  const columnsData = useSelector((state: AllState) => state.columns)
  const dispatch = useDispatch()

  const handleEnableChange = (columnName: string, enableState: boolean): void => {
    //更新ColumnData Enable狀態
    const updateColumnData: Column[] = columnsData.map((item) => {
      if(item.selectName === columnName){
        return {
          ...item,
          enable: enableState
        }
      }
      return item
    })
    //更新FillData Enable狀態
    const currentFillData: FillData[] = fillDataList.map((item) => {
      if(item.root === columnName){
        return {
          ...item,
          enable: enableState
        }
      }
      return item
    })
    //更新Storage及Redux
    dispatch(selectUpdate(updateColumnData))
    setColumnsData(updateColumnData)
    dispatch(updateFillData(currentFillData))
    setStorage(currentFillData)
  }

  //columnsData改變時，更新rowList，重新渲染SwitchContainer
  useEffect(() => {
    const currentRowList = columnsData.map((item, i) => {
      let hiddenBorder = false
        if(columnsData.length === i + 1){
          hiddenBorder = true
        }
        //columnsData的secltName為唯一值，可用於key
        return ( <SwitchContainer 
          key={item.selectName} 
          label={item.selectName} 
          hiddenBorder={hiddenBorder} 
          enableState={item.enable} 
          handleEnableChange={handleEnableChange} /> )
      })
      setRowList(currentRowList)
  }, [columnsData])


  return (
      <Paper sx={{ p: 2, display: 'flex', alignItems: 'start', height: '100%', minHeight: '400px' }} elevation={3}>
        <Grid container spacing={1}>
          {rowList}             
        </Grid>            
      </Paper>
  )

}

export default EnablePanel