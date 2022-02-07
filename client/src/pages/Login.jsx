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
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { validateEmail, validatePassword } from '../utils/helpers';
import Swal from 'sweetalert2';


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

export default function SignIn(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [emailState, setEmailState] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {

      console.log(e);
    }
  };

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
  }

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
          <Avatar sx={{ m: 1, bgcolor: '#07c400' }}>
          </Avatar>
          <Typography sx={{ fontWeight: 'light' }} variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={emailState}
              inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
              InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
              margin="normal"
              required
              fullWidth
              id="email"
              label={emailState ? 'Invalid Email Address' : 'Email Address'}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
              InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {error ? (
              <Container align='center' sx={{ mt: 3 }}>
                <Typography variant='body' sx={{ fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: '#cc1818' }}>Incorrect Email or Password!</Typography>
              </Container>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00'}, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}