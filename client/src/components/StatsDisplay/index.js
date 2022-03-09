import React from 'react';
import { getOverall } from '../../utils/helpers';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Grid, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getAge } from '../../utils/helpers';


function StatsDisplay(props) {
  if (!props.user.stats[0]) {
    return (
      <Grid item xs={12} lg={8} sx={{ justifyContent: 'center' }} align="center">
        <Card sx={{ flexGrow: 1, borderRadius: 3, minHeight: 440, mx: 2.5 }}>
          <CardContent sx={{ justifyContent: 'center' }} align='center'>
            <Stack direction={'column'}>
              <Typography variant="h4" align='center'>{`${props.user.first_name} ${props.user.last_name}`}</Typography>
              <Typography>
              <Box component="span" fontWeight={'bold'}>Preffered Foot: </Box>{props.user.preffered_foot} 
              <Box component="span" fontWeight={'bold'} ml={2}>Preffered Position: </Box>{props.user.preffered_position}
              </Typography>
              <Typography sx={{ mb: 4, fontWeight: 'bold' }}>{getAge(props.user.date_of_birth)} Year's Old</Typography>
            </Stack>
            <Typography variant="h4" align='center'>Waiting On Coach Feedback</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }


  return (
    <Grid item xs={12} lg={8} sx={{ justifyContent: 'center' }} align="center">
      <Card sx={{ flexGrow: 1, borderRadius: 3, minHeight: 440, mx: 2.5 }}>
        <CardContent sx={{ justifyContent: 'center' }} align='center'>
          <Stack direction={'column'}>
          <Typography variant="h4" align='center'>{`${props.user.first_name} ${props.user.last_name}`}</Typography>
          <Typography>
              <Box component="span" fontWeight={'bold'}>Preffered Foot: </Box>{props.user.preffered_foot} 
              <Box component="span" fontWeight={'bold'} ml={2}>Preffered Position: </Box>{props.user.preffered_position}
              </Typography>
                          <Typography sx={{ mb: 4, fontWeight: 'bold' }}>{getAge(props.user.date_of_birth)} Year's Old</Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>PACE</Typography>
                <Typography variant="h4">{props.user.stats[0].pace}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>SHOOTING</Typography>
                <Typography variant="h4">{props.user.stats[0].shooting}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>PASSING</Typography>
                <Typography variant='h4'>{props.user.stats[0].passing}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>DRIBBLING</Typography>
                <Typography variant='h4'>{props.user.stats[0].dribbling}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>DEFENDING</Typography>
                <Typography variant='h4'>{props.user.stats[0].defending}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>PHYSICALITY</Typography>
                <Typography variant='h4'>{props.user.stats[0].physicality}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>SKILLS</Typography>
                <Typography variant='h4'>{props.user.stats[0].skills}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>WEAK FOOT</Typography>
                <Typography variant='h4'>{props.user.stats[0].weak_foot_ability}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>TACTICAL</Typography>
                <Typography variant='h4'>{props.user.stats[0].tactical}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction={'column'}>
                <Typography variant='h5'>PSYCHOLOGICAL</Typography>
                <Typography variant='h4'>{props.user.stats[0].psychological}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default StatsDisplay;