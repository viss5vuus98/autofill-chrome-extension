import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useState, useEffect, useRef } from 'react'
import { setStorage } from '../../utils/storage'
import { Column, FillData, AllState } from '../../types/dataTypes'
import { useSelector, useDispatch } from 'react-redux'
import { updateFillData } from '../action/fillDataAction';

interface SetValueSectionProps {
  selectValue: Column
}

interface InputValues {
  [propName: string]: string;
}

const SetValueSection = (props: SetValueSectionProps) => {
  const { selectValue } = props
  const firInputRef = useRef(null)
  const secInputRef = useRef(null)
  const [ inputValues, setInputValues ] = useState<InputValues>({})
  const fillDataList = useSelector((state: AllState) => state.fillData)
  const dispatch = useDispatch()

  const handleChangeTextField = (value: string, target: string): void => {
    if(value.trim().length <= 0){
      return
    }
    const newInputValues: InputValues = {
      ...inputValues,
      [target]: value
    }
    setInputValues(newInputValues)
  }

  const handleConfirm = (): void => {
    //check inputValues has value ,if not, return ,if yes, setStorage
    const  validationCount = selectValue.type === 'single' ? 1 : 2
    const currentColumn = Object.values(inputValues)
    if (currentColumn.length < validationCount){
      return
    }

    for ( let item in  inputValues){
      if(item.trim().length <= 0){
        return
      }
    } 
    
    console.log('confirm')
    const updateData: FillData[] = fillDataList.map((item) => {
      selectValue.columnNames.map((colName) => {
        if(item.key === colName){
          item.value = inputValues[colName]
        }
      })
      return item
    })
    console.log("updateData", updateData)
    if(updateData.length > 0){
      setStorage(updateData)
      dispatch(updateFillData(updateData))
    }    
  }

  //set input default value
  useEffect(() => {
    const newInputValues: InputValues = {}
    fillDataList.forEach((item) => {
      selectValue.columnNames.forEach((colName) => {
        if(item.key === colName){
          newInputValues[colName] = item.value
        }
      })
    })
    setInputValues(newInputValues)
  }, [fillDataList, selectValue])

  if(selectValue.type === 'single'){
    return (
      <>
        <Box
          sx={{
            mt: 4,
          }}        
        >
          <TextField
          id="target-set"
          label={selectValue.columnNames[0]}
          variant="outlined"
          fullWidth
          onChange={(e) => { handleChangeTextField(e.target.value, selectValue.columnNames[0]) }}
          value={inputValues[selectValue.columnNames[0]] ?? ''}
          inputRef={firInputRef}
          />
        </Box>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
          }}           
        >
          <Button variant="contained" size={'small'} onClick={ handleConfirm }>Confirm</Button>
        </Box>
      </>
    )
  }else {
    return (
      <>
        <Box
          sx={{
            mt: 4,
          }}
        >
          <TextField 
          id="target-set-first" 
          label={selectValue.columnNames[0]}
          variant="outlined" 
          fullWidth 
          onChange={(e) => { handleChangeTextField(e.target.value, selectValue.columnNames[0]) }}
          value={inputValues[selectValue.columnNames[0]] ?? ''}
          inputRef={firInputRef}
          />
          |
          <TextField 
          id="target-set-second" 
          label={selectValue.columnNames[1]}
          variant="outlined" 
          fullWidth 
          onChange={(e) => { handleChangeTextField(e.target.value, selectValue.columnNames[1]) }}
          value={inputValues[selectValue.columnNames[1]] ?? ''}
          inputRef={secInputRef}
          />               
        </Box>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
          }}        
        >
          <Button variant="contained" size={'small'} onClick={ handleConfirm }>Confirm</Button>
        </Box>
      </>
    )
  }
}

export default SetValueSection


//從Chrome Storage中取得Template的資料()，若沒有，則取得SelectDefaultData的資料
//(計畫)顯示所有select Name在Select中
//選擇select Name後，顯示對應的Column Name
//依據Column Name顯示對應的Value

//輸入Value後，按下Confirm，以selectData的格式，key為select Name，value為Value，存入Chrome Storage中
//若已經有相同的key，則更新value
//若沒有相同的key，則新增一筆資料
//每次有修改時，都要更新localStorageData中相同Key的selectData的value
//並且將localStorageData存入Chrome Storage中

//contextMenus.onClicked事件觸發時，使用getStorage()取得資料，並將資料填入對應的欄位中