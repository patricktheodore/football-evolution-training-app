import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Memberships() {
  return (
    <Container maxWidth="l">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={10} textAlign="center" sx={{ my: 10}}>
            <Typography variant='h4'>
                Check Back Soon For Membership Details
            </Typography>
        </Grid>
      </Grid>
    </Box>
  </Container>
    );
}
