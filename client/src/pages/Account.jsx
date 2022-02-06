import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Typography } from '@mui/material';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import moment from 'moment';
import { Avatar, Button, Link, Grid, TextField, Container, CssBaseline, Box, Radio, RadioGroup, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, FormControl, Divider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DatePicker from '../components/DatePicker';
import appBar from '../styles/appBar.css';

const theme = createTheme();

const Account = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    preffered_foot: '',
    preffered_position: ''
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({ formState });

    const mutationResponse = await updateUser({
      variables: {
        first_name: formState.firstName,
        last_name: formState.lastName,
        preffered_foot: formState.preffered_foot,
        preffered_position: formState.preffered_position
      },
    });
    const token = mutationResponse.data.updateUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { loading, data } = useQuery(GET_ME)

  const user = data?.me || {};

  useEffect(() => {
    if (data) {
      setFormState({ ...user })
    }
  }, [data, user])

  if (loading) {
    return <div>Loading</div>
  }

  if (!user?._id) {
    return (
      <Typography sx={{ mt: 15 }}>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </Typography>
    );
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'light' }}>
            Update Your Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  defaultValue={user.first_name}
                  label="Given Names"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  fullWidth
                  id="lastName"
                  label="Family Name"
                  defaultValue={user.last_name}
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="preffered_position">{user.preffered_position}</InputLabel>
                  <Select
                    labelId="preffered_position"
                    name="preffered_position"
                    id="preffered_position"
                    label="preffered_position"
                    defaultValue={user.preffered_position}
                    onChange={handleChange}
                  >
                    <MenuItem value="GK">Goalkeeper</MenuItem>
                    <Divider />
                    <MenuItem value="DEF">Defender</MenuItem>
                    <MenuItem value="CB">Center Back</MenuItem>
                    <MenuItem value="RB">Right Back</MenuItem>
                    <MenuItem value="RWB">Right Wing Back</MenuItem>
                    <MenuItem value="LB">Left Back</MenuItem>
                    <MenuItem value="LWB">Left Wing Back</MenuItem>
                    <Divider />
                    <MenuItem value="MID">Midfielder</MenuItem>
                    <MenuItem value="CM">Central Midfielder</MenuItem>
                    <MenuItem value="CAM">Defensive Midfielder</MenuItem>
                    <MenuItem value="CDM">Attacking Midfielder</MenuItem>
                    <MenuItem value="RM">Right Midfielder</MenuItem>
                    <MenuItem value="LF">Left Midfielder</MenuItem>
                    <Divider />
                    <MenuItem value="FWD">Forward</MenuItem>
                    <MenuItem value="ST">Striker</MenuItem>
                    <MenuItem value="CF">Center Forward</MenuItem>
                    <MenuItem value="RF">Right Forward</MenuItem>
                    <MenuItem value="RW">Right Wing</MenuItem>
                    <MenuItem value="LF">Left Forward</MenuItem>
                    <MenuItem value="LW">Left Wing</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <FormControl fullWidth sx={{ textAlign: 'center', justifyContent: 'center' }}>
                  <FormLabel id="preffered_foot">Preffered Foot</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="preffered_foot"
                    name="preffered_foot"
                    label="preffered_foot"
                    id="preffered_foot"
                    defaultValue={user.preffered_foot}
                    onChange={handleChange}
                    sx={{ textAlign: 'center', justifyContent: 'center' }}
                  >
                    <FormControlLabel value="Left" control={<Radio color="success" />} label="Left" className='formLabel'/>
                    <FormControlLabel value="Right" control={<Radio color="success" />} label="Right" />
                    <FormControlLabel value="Both" control={<Radio color="success" />} label="Both" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                  disabled
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={user.email}
                />
              </Grid>
            </Grid>
            <Button
              size='large'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00'}, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
            >
              Update
            </Button>
            <Button
              href="/profile"
              fullWidth
              sx={{ mt: 3, mb: 2, color: '#171717', textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
            >
              Back To Profile
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Account;