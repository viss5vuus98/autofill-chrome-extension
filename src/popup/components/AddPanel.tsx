import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFillData } from '../action/fillDataAction';
import { selectUpdate } from '../action/selectAction';
import { Column, FillData, AllState, CreateColumnForm } from '../../types/dataTypes'
import { setStorage, setColumnsData, getStorage, getColumnsData } from '../../utils/storage'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormRow from './FormRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextBox from './TextBox';

interface FormData {
  columnType: string;
  selectName: string;
  columns: string[];
  enable: boolean;
  getType: string;
}

const AddPanel: React.FC = () => {
  const [ formData, setFormData ] = useState<FormData>({
    columnType: '',
    selectName: '',
    getType: '',
    columns: [],
    enable: false
  })
  const dispatch = useDispatch()
  const onFormRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onTextBoxChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number): void => {
    let currentColumns: string[] = [];
    if(formData.columns.length < index + 1){
      if(index === 0){
        currentColumns = [ e.target.value ]
      }else if(index === 1){
        currentColumns = [ ...formData.columns, e.target.value]
      }
    }else{
      currentColumns = formData.columns.map((col, i) => {
        if(i === index){
          return e.target.value
        }
        return col
      })
    }
    setFormData({
      ...formData,
      columns: currentColumns
    })
  }

  const handleConfirm = (): void => {
    //check formData every is not empty
    console.log("co",formData)
    if(formData.columnType === ''){
      alert('欄位類型不可為空')
      return
    }
    if(formData.selectName === ''){
      alert('自訂群組名稱不可為空')
      return
    }
    if(formData.getType === ''){
      alert('綁定方式不可為空')
      return
    }
    formData.columns.forEach(col => {
      if(col.trim().length <= 0){
        alert('屬性名不可為空')
        return
      }
    })
    if(formData.columns[0] === formData.columns[1]){
      alert('屬性名不可重複')
      return
    }
    //check selectName and fillData's key is not repeat
    getColumnsData().then((columnsData: Column[]) => {
      const repeatSelect = columnsData.find(col => col.selectName === formData.selectName)
        if(repeatSelect){
          alert('自訂群組名稱與現有資料重複')
          return
        }
        return [...columnsData, {
          selectName: formData.selectName,
          columnNames: formData.columns,
          enable: formData.enable,
          type: formData.columnType,
        }
      ]
    }).then((newColumns: Column[]) => {
      getStorage().then((fillData: FillData[]) => {
        const repeatColumns = fillData.find(col => col.key === formData.columns[0] || col.key === formData.columns[1])
        if(repeatColumns){
          alert('欄位值與現有資料重複')
          return
        }
        setColumnsData(newColumns).then(() => {
          dispatch(selectUpdate(newColumns))
        })
        //console.log("setColumnsData",newColumns)
        const addFillData = formData.columns.map(col => {
          return {
            enable: true,
            key: col,
            root: formData.selectName,
            value: '',
          }
        })
        return [...fillData, ...addFillData]
      }).then((newFillData: FillData[]) => {
          //console.log("setStorage",newFillData)
          setStorage(newFillData).then(() => {
            dispatch(updateFillData(newFillData))
            setFormData({
              columnType: '',
              selectName: '',
              getType: '',
              columns: [],
              enable: false
            })
          })
      })
    })
  }
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }} elevation={3}>
      <Grid container spacing={1}>
        <FormRow id={'columnType'} selectName={'欄位類型'} selectItems={[{key:'單欄', value:'single'}, {key:'雙欄', value:'pair'}]} onFormRowChange={onFormRowChange} value={formData.columnType}/>
        <FormRow id={'getType'} selectName={'綁定方式'} selectItems={[{key:'Name', value:'name'}]} onFormRowChange={onFormRowChange} value={formData.getType}/>
        <Grid item xs={12}>
          <TextField 
              id='columnName'
              label="輸入自訂群組名稱"
              variant="outlined"
              name='selectName' 
              fullWidth
              onChange={(e) => { onTextFieldChange(e) }}
              value={formData.selectName}               
            />
        </Grid>    
        { 
          formData.columnType === 'single' 
          ? 
            <Grid item xs={12}>
              <TextBox id={'columnValue'} label={'輸入屬性名'} onTextFieldChange={onTextBoxChange} index={0} value={formData.columns[0] ?? ''}/>
            </Grid>
          :
          <Grid item xs={12}>
            <TextBox id={'columnValue1'} label={'輸入屬性名1'} onTextFieldChange={onTextBoxChange} index={0} value={formData.columns[0] ?? ''}/>
            <TextBox id={'columnValue2'} label={'輸入屬性名2'} onTextFieldChange={onTextBoxChange} index={1} value={formData.columns[1] ?? ''}/>
          </Grid>   
        }         
        <Grid item xs={12}>
          <Box sx={{display: 'flex',justifyContent: 'center', marginY: 1}}>
            <Button variant="contained" size={'small'} onClick={handleConfirm}>Confirm</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddPanel

// Path: src/popup/components/EnablePanel.tsx
        
