import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function MaterialUIPickers(props) {
  const [value, setValue] = useState(new Date('01-01-2000'));

  const handleChange = (newValue) => {
    setValue(newValue);

    if (props.onValue) {
      props.onValue(newValue)
    }
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MobileDatePicker
        label={props.type}
        id="dateOfBirth"
        inputFormat="DD/MM/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
