import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

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
          inputFormat="DD/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}
