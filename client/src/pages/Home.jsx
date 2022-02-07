import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OurStory from '../components/OurStory';
import SessionInfo from '../components/SessionInfo';
import Container from '@mui/material/Container';
import PlayerCount from "../components/PlayerCount";
import SessionCount from '../components/SessionCount';
import CoachCount from "../components/CoachCount";


// dashboard contains, 'our story' 
// and a link to available sessions, and player login/signup

const Home = () => {
  return (
    <Container maxWidth="l">
      <Box className="home-container" sx={{ flexGrow: 1, mx: 10 }}>
        <Grid container spacing={4}>
            <OurStory />
            <SessionInfo />
            <PlayerCount />
            <SessionCount />
            <CoachCount />
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;