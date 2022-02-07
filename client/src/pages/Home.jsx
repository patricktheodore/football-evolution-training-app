import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OurStory from '../components/OurStory';
import SessionInfo from '../components/SessionInfo';
import Container from '@mui/material/Container';


// dashboard contains, 'our story' 
// and a link to available sessions, and player login/signup

const Home = () => {
  return (
    <Container maxWidth="l">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <OurStory />
            <SessionInfo />
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;