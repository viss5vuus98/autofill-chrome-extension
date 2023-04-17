import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MuiFilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Column, FillData } from '../../types/dataTypes'
import { useDispatch, useSelector } from 'react-redux'
import { SelectDefaultData, FillDefaultData } from '../../utils/template'
import { setSelectData } from '../action/selectAction'
import { setColumnsData, getColumnsData, getStorage, setStorage } from '../../utils/storage'
import { loadAllFillData } from '../action/fillDataAction'
import SetValueSection from './SetValuePanel'
import EnablePanel from './EnablePanel'
import AddPanel from './AddPanel'

interface TabPanelProps {
  children?: React.ReactNode;
  value: Number;
  index: Number;
};

const FormSection = () => {
  const currentSelectData: Column[] = useSelector((state: any) => state.columns) ?? SelectDefaultData
  const [ currentColumn, setCurrentColumn ] = useState({
    selectName: '',
    columnNames: [],
    enable: false,
    type: '',
  })


  const handleChangeColName = (value: string): void => {
    if(value.trim().length <= 0){
      return
    }
      currentSelectData.forEach(item => {
        if(item.selectName === value){
          setCurrentColumn(item)
        }
      }
    )
  }
  useEffect(() => {
    if(currentSelectData.length > 0){
      setCurrentColumn(currentSelectData[0])
    }
  }, [currentSelectData])
  return (
    <FormControl sx={ {height: 50, width: '100%'}}>
      <InputLabel id="form1">target</InputLabel>
      <Select
      labelId="target-selected-label"
      id="target-selected"
      value={currentColumn.selectName}
      label="columns"
      onChange={(e) => { handleChangeColName(e.target.value) }}
      >
        {
            currentSelectData.map(item => <MenuItem key={item.selectName} value={item.selectName}>{item.selectName}</MenuItem>
          )
        }
      </Select>
      <Box>
          <SetValueSection selectValue={currentColumn}/>
      </Box>
    </FormControl>
  )
}

//Function Component 
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props
  if(value !== index){ return null }
  return(
    <section>
      <h1>{children}</h1>
    </section>
  )
}

//Function Component 泛型定義 React.FunctionComponent<P={}>
// const TabPanel: React.FC<TabPanelProps> = (props) => {
//   const { children, value, index, ...other } = props
//   return(
//     <section hidden={value !== index}>
//       {children}
//       <MuiFilledInput/>
//     </section>
//   )
// }

const BasicTab = () => {
  const [ currentPage, setCurrentPage ] = useState(0)
  const dispatch = useDispatch()
  
  //first render then run useEffect and get selectData from chrome.storage
  //if selectData is null, set default value from SelectDefaultData
  //get selectData from chrome.storage and dispatch(setSelectData) to redux
  //if not first render not do this useEffect
  useEffect(() => {
    getColumnsData().then((res: Array<Column>) => {
      //check res has data ,if not set default value to redux
      const selectData: Column[] = res
      dispatch(setSelectData(selectData))
      if(res.length <= 0){
        dispatch(setSelectData(SelectDefaultData))
        setColumnsData(SelectDefaultData)
      }else {
        dispatch(setSelectData(selectData))
      }
    })
  }, [])

  useEffect(() => {
    getStorage().then((res) => {
      const fillData: FillData[] = res
      if(res.length <= 0){
        dispatch(loadAllFillData(FillDefaultData))
        setStorage(FillDefaultData)
      }else {
        dispatch(loadAllFillData(fillData))
      }
    })
  }, [])
  const handleTabsClick = (index: number) => {
    setCurrentPage(index);
  }

  return (
    <>
    <Box
      sx={
        {
          marginBottom: 0
        }
      }
    >
      <Tabs 
      value={currentPage} 
      aria-label="tabs"
      variant="scrollable"
      scrollButtons={false}
      sx={{
        width: '100%',
      }}
      >
        <Tab 
        sx={{px: 0.5, width: 2, fontSize: 2}}
        label="Value" id={"tab1"} aria-controls="tabs" onClick={() => { handleTabsClick(0) }}/>
        <Tab
        sx={{px: 0.5, width: 2, fontSize: 2}} 
        label="Select" id={"tab2"} aria-controls="tabs" onClick={() => {handleTabsClick(1)}}/>
        <Tab
        sx={{px: 0.5, width: 2, fontSize: 2}}         
        label="Enable" id={"tab2"} aria-controls="tabs" onClick={() => {handleTabsClick(2)}}/>        
      </Tabs>
    </Box>
    {/* */}
    <TabPanel value={currentPage} index={0}>
      <Box
        sx={
          {
            paddingY: 2,
          }
        }
      >
        <FormSection 
        ></FormSection>
      </Box>
    </TabPanel>
    <TabPanel value={currentPage} index={1}>
      <Box
        sx={
          {
            pt: 1,
            pb: 2,
          }
        }      
      >
        <AddPanel/>
      </Box>
    </TabPanel>
    <TabPanel value={currentPage} index={2}>
      <Box
        sx={
          {
            pt: 1,
            pb: 2,
          }
        }      
      >
        <EnablePanel/>
      </Box>
    </TabPanel>    
    </>
  )
}
export default BasicTab