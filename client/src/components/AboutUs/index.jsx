import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Box, Grid } from '@mui/material';
import ValuesAndPhilosophy from './ValuesAndPhilosophy';
import OurStory from './AboutUs';


const AboutUs = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <OurStory />
          <ValuesAndPhilosophy />
        </Grid>
      </Box>
    </Container>



  );
};

export default AboutUs;