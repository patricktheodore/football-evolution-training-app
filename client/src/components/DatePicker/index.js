import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label="Date Of Birth"
          id="dateOfBirth"
          inputFormat="DD/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}
