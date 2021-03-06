import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import DatePicker from '../components/DatePicker';
import moment from 'moment';
import { Radio, RadioGroup, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, FormControl, Divider } from '@mui/material'
import { validateEmail, validatePassword } from '../utils/helpers';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }} {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Football Evolution Training
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    preffered_foot: '',
    preffered_position: ''
  });
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);


  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({ formState });

    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        first_name: formState.firstName,
        last_name: formState.lastName,
        date_of_birth: formState.dateOfBirth,
        preffered_foot: formState.preffered_foot,
        preffered_position: formState.preffered_position
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  function enterDoB(dob) {

    // dob is UTC, 
    // TODO: convert dob to human
    dob = moment(dob).format('DD/MM/yyyy');
    setFormState({
      ...formState,
      dateOfBirth: dob,
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    runValidators(name, value)
  };

  const runValidators = (name, value) => {
    if (name === 'email') {
      setEmailState(!validateEmail(value));
    } 
    setPasswordState(!validatePassword(value));
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 4}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#07c400' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Given Names"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                required
                fullWidth
                id="lastName"
                label="Family Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker onValue={enterDoB} type={'Date of Birth'}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="preffered_position">Preffered Position</InputLabel>
                <Select
                  labelId="preffered_position"
                  name="preffered_position"
                  id="preffered_position"
                  label="preffered_position"
                  value={formState.preffered_position}
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
            <Grid item xs={12} >
              <FormControl fullWidth sx={{ textAlign: 'center', justifyContent: 'center' }}>
                <FormLabel id="preffered_foot">Preffered Foot</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="preffered_foot"
                  name="preffered_foot"
                  label="preffered_foot"
                  id="preffered_foot"
                  onChange={handleChange}
                  sx={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  <FormControlLabel value="Left" control={<Radio color="success" />} label="Left" />
                  <FormControlLabel value="Right" control={<Radio color="success" />} label="Right" />
                  <FormControlLabel value="Both" control={<Radio color="success" />} label="Both" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                            error={emailState}
                inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                required
                fullWidth
                id="email"
                label={emailState ? 'Invalid Email Address' : 'Email Address'}
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              error={passwordState}
                inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
                required
                fullWidth
                name="password"
                label={passwordState ? 'Password must have at least one letter, one number and be 8 characters long' : 'Password'}
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00'}, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
            >
            Register
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/login" variant="body2" sx={{ color: 'black'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}