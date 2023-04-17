import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { SelectChangeEvent } from '@mui/material';

interface TextBoxProps {
  id: string;
  label: string;
  index: number;
  onTextFieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  value: string;
}

const TextBox = (props: TextBoxProps) => {
  const { id, label, index, onTextFieldChange, value } = props
  return (
        <Box>
          <TextField 
            id={`${id}-fill-key`}
            label={label}
            variant="outlined"
            name='columnName'
            value={value}           
            fullWidth
            onChange={(e) => { onTextFieldChange(e, index);}}
          />
          <FormHelperText>{`依據綁定類型輸入ID或Name屬性`}</FormHelperText>                
        </Box>
  );
}

export default TextBox