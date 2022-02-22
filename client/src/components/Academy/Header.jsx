import React from 'react';
import { Container, Paper, Stack, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';


export default function Header() {
  return (
      <Paper sx={{ py: 5, my: 5, boxShadow: 'none' }}>
        <Stack direction={'column'} sx={{ textAlign: 'center' }}>
          <Typography variant='h2'>The</Typography>
          <Paper sx={{ boxShadow: 'none', my: 5 }}><img src={logo} alt='fet logo' /></Paper>
          <Typography variant='h2'>Academy</Typography>
          <Typography sx={{ mt: 2 }}>Est. 2021</Typography>
        </Stack>
      </Paper>
    )
}
