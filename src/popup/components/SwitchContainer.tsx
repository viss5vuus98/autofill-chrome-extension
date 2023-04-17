import * as React from 'react';
import IOSSwitch from './Switch';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface EnableProp {
  label: string;
  hiddenBorder: boolean;
  enableState: boolean;
  handleEnableChange: (columnName: string, enableState: boolean) => void;
  children?: React.ReactNode;
}


const SwitchContainer: React.FC<EnableProp> = (props: EnableProp) => {
  const { hiddenBorder, label, enableState, handleEnableChange } = props
  const switchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleEnableChange(label, e.target.checked)
  }
  return (
        <Grid item xs={12}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderBottom: hiddenBorder ? 0 : 0.5,
            borderColor: 'd0d0d0',
          }}>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} onChange={switchChange} checked={enableState}/>}
              label={label}
              labelPlacement="start"
              sx={{
                width: '100%',
                justifyContent: 'space-between',
                ml: 0,
              }}
            />              
          </Box>
        </Grid>
        )
}

export default SwitchContainer