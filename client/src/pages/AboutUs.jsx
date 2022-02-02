import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AboutUs from '../components/AboutUs';
import Container from '@mui/material/Container';

// dashboard contains, 'our story' 
// and a link to available sessions, and player login/signup

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} lg={10}>
            <AboutUs />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;