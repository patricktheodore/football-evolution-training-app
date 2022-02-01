import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OurStory from '../components/OurStory';
import SessionInfo from '../components/SessionInfo';
import Container from '@mui/material/Container';
import TotalPlayers from "../components/TotalPlayers";
import TotalSessions from "../components/TotalSessions";
import TotalCoaches from "../components/TotalCoaches/TotalCoaches";

// dashboard contains, 'our story' 
// and a link to available sessions, and player login/signup

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <OurStory />
            <SessionInfo />
            <TotalPlayers />
          <Grid item xs={6} lg={4}>
            <TotalSessions />
          </Grid>
          <Grid item xs={6} lg={4}>
            <TotalCoaches />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;