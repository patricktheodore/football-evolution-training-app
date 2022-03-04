import React, { useEffect, useState } from 'react'
import { ADD_SESSION } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import moment from 'moment';
import DatePicker from '../components/DatePicker';
import { Typography, Button, Grid, TextField, Container, CssBaseline, Box, Radio, RadioGroup, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, FormControl, Divider } from '@mui/material'


export default function AddSession() {

  const [formState, setFormState] = useState({
    title: '',
    type: '',
    short_desc: '',
    long_desc: '',
    min_age: '',
    max_age: '',
    date: '',
    time: '',
    location: ''
  });

  const [addSession, { err }] = useMutation(ADD_SESSION);

  const handleChange = (event) => {
    console.log(formState);
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    console.log({ formState });

    //reditect to /sessions/${sessionId}

    try {
      const result = await addSession({
        variables: {
          title: formState.title,
          type: formState.type,
          short_desc: formState.short_desc,
          long_desc: formState.long_desc,
          min_age: formState.min_age,
          max_age: formState.max_age,
          date: formState.date,
          time: formState.time,
          location: formState.location
        }
      });
      console.log({ result });
    } catch (err) {
      console.log(err)
    }
  };

  function editDate(newDate) {
    newDate = moment(newDate).format('DD/MM/yyyy');
    setFormState({
        ...formState,
        date: newDate,
    })
}




  return (
<Container component="main" maxWidth="l">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'light', mb: 4 }}>
                            Add New Session
                        </Typography>
                        <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 3, maxWidth: 'md', width: '100%' }}>
                            <Grid container spacing={2} justifyContent={'space-between'}>
                                <Grid item xs={12} lg={6} mb={3}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        autoComplete="title"
                                        name="title"
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} mb={3}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        autoComplete="location"
                                        name="location"
                                        fullWidth
                                        id="location"
                                        label="Location"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={4} mb={3}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        autoComplete="time"
                                        name="time"
                                        fullWidth
                                        id="time"
                                        label="Time"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} lg={4} mb={3} textAlign={'center'}>
                                    <DatePicker onValue={editDate} type={'Start Date'} />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} mb={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="type">Type</InputLabel>
                                        <Select
                                            labelId="type"
                                            name="type"
                                            id="type"
                                            label="Type"
                                            value={formState.type}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="academy">Academy</MenuItem>
                                            <MenuItem value="camp">Camp</MenuItem>
                                            <MenuItem value="epl">Evolution Premier League</MenuItem>
                                            <MenuItem value="private">Private Session</MenuItem>
                                            <MenuItem value="tournament">Tournament</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} lg={2} mb={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="type">Min Age</InputLabel>
                                        <Select
                                            labelId="min_age"
                                            name="min_age"
                                            id="min_age"
                                            label="Min Age"
                                            value={formState.min_age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>
                                            <MenuItem value={13}>13</MenuItem>
                                            <MenuItem value={14}>14</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                            <MenuItem value={16}>16</MenuItem>
                                            <MenuItem value={17}>17</MenuItem>
                                            <MenuItem value={18}>18</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} lg={2} mb={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="type">Max Age</InputLabel>
                                        <Select
                                            labelId="max_age"
                                            name="max_age"
                                            id="max_age"
                                            label="Max Age"
                                            value={formState.max_age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>
                                            <MenuItem value={13}>13</MenuItem>
                                            <MenuItem value={14}>14</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                            <MenuItem value={16}>16</MenuItem>
                                            <MenuItem value={17}>17</MenuItem>
                                            <MenuItem value={18}>18</MenuItem>
                                            <MenuItem value={99}>18+</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={8} mb={3}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        autoComplete="short_desc"
                                        name="short_desc"
                                        fullWidth
                                        id="short_desc"
                                        label="Short Description"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} mb={3}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                        autoComplete="long_desc"
                                        multiline
                                        rows={4}
                                        name="long_desc"
                                        fullWidth
                                        id="long_desc"
                                        label="Long Description"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                size='large'
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00' }, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
                            >
                                Update
                            </Button>
                            <Button
                                href={`/trainWithUs`}
                                fullWidth
                                sx={{ mt: 3, mb: 2, color: '#171717', textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
                            >
                                Back
                            </Button>
                        </Box>
                    </Box>
                </Container>  )
}
