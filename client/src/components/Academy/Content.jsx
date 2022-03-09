import { Container, Divider, Paper, Typography, Chip, Grid } from '@mui/material'
import React from 'react';
import About from './About';
import AcademyStructure from './AcademyStructure';
import Issues from './Issues';

export default function Content() {
  return (
    <Container xs={12} lg={10} sx={{ justifyContent: 'center', textAlign: 'center' }}>
      <Divider>
        <Chip label="Welcome to the FET Academy!" sx={{ fontSize: '1rem', px: 3 }} />
      </Divider>
      <Container xs={12} md={10} lg={6}>
        <Typography align='center' sx={{ fontSize: '1.2rem', mt: 4}}>
          The FET Academy has been designed to improve the gap in producing top quality talent in Perth, Western Australia.
        </Typography>
      </Container>
      <Container xs={12} md={10} lg={6}>
        <Typography align='center' sx={{ fontSize: '1.2rem', mt: 4}}>
          Our unique philosophy and innovative sessions are optimised to develop athletic, intelligent, tactically and 
          technically sound, creative football players.
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: 'start', my: 10 }}>
          <About />
          <AcademyStructure />
          <Issues />
        </Grid>
      </Container>
    </Container>
  )
}
