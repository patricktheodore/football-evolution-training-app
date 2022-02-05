import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function MaterialUIPickers(props) {
  const [value, setValue] = useState(new Date('05-03-1994'));

  const handleChange = (newValue) => {
    setValue(newValue);

    if(props.onValue){
      props.onValue(newValue)
    }
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label="Date Of Birth"
          id="dateOfBirth"
          inputFormat="MM/DD/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}
