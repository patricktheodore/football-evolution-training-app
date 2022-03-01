import React from 'react';
import { Container, Box, Typography, TextField, Grid, Button } from '@mui/material'


export default function Camps() {
  return (
    <Container xs={12} lg={6} sx={{ justifyContent: 'center', textAlign: 'center' }}>
      <Container xs={12} md={10} lg={6}>
        <Typography align='center' sx={{ fontSize: '1.2rem', mt: 4 }}>
          Express your interest to join our upcoming Camps!
        </Typography>
      </Container>
      <Box component="form"  noValidate sx={{ mt: 3 }}>
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
              InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, color: 'black' } }}
              required
              fullWidth
              id="email"
              label='Email Address'
              name="email"
              autoComplete="email"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00' }, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  )
}
