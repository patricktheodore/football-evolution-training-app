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
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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
  const [formState, setFormState] = useState({ email: '', password: '' });
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
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker onValue={enterDoB} />
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="preffered_foot">Preffered Foot</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="preffered_foot"
                  name="preffered_foot"
                  label="preffered_foot"
                  id="preffered_foot"
                  onChange={handleChange}
                >
                  <FormControlLabel value="Left" control={<Radio color="success"/>} label="Left" />
                  <FormControlLabel value="Right" control={<Radio color="success"/>} label="Right" />
                  <FormControlLabel value="Both" control={<Radio color="success"/>} label="Both" />
                </RadioGroup>
              </Grid>
              {/* insert preffered position select component here */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
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
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}