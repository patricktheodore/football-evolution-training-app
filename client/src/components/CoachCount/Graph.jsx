import React from 'react';
import { Container, Grid, Stack } from '@mui/material';

export default function Graph() {
  return (
      <Container>
          <Grid>
              <Stack direction={'row'} spacing={2}>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20 }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>
                  <Container sx={{ backgroundColor: "green", width: '2px', height: 20  }}></Container>

              </Stack>
          </Grid>
      </Container>
  );
}
