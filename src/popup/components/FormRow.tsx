import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

interface FormRowProps {
  id: string;
  selectName: string;
  selectItems: itemObj[];
  onFormRowChange?: (e: SelectChangeEvent) => void;
  value?: string;
}

interface itemObj {
  key: string;
  value: string;
}

const FormRow = (props: FormRowProps) => {
  const { id, selectName, selectItems, onFormRowChange, value} = props
  //const [value, setValue] = useState<string>('')
  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id={id}>{selectName}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={`${id}-select`}
          value={value}
          label={selectName}
          name={id}
          onChange={(e) => { onFormRowChange(e);}}
        >
          <MenuItem value="">
            <em>{`${selectName}`}</em>
          </MenuItem>
          { selectItems.map((item) => <MenuItem key={item.value} value={item.value}>{item.key}</MenuItem>) }
        </Select>        
        <FormHelperText>{`${selectName}欄位必須填寫`}</FormHelperText>      
      </FormControl>          
    </Grid>
  );
}

export default FormRow