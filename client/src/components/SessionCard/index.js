import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SessionCard(props) {
  return (
    <Grid item xs={12} lg={4}>
      {props.session && (
        <Card sx={{ flexGrow: 1, borderRadius: 3, minHeight: 440, mt: 5, mx: 2.5 }} key={props.session._id} elevation={5}>
        <CardContent sx={{ mx: 10, mt: 10 }} align="justify">
          <Typography sx={{ mb: 1.5 }} variant="h5" component="div" align='center'>
            {props.session.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center' sx={{ mb: 2 }}>
            Min Age: {props.session.min_age} | Max Age: {props.session.max_age}
          </Typography>
          <Typography align='center'>
            {props.session.short_desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button href={`/sessions/${props.session._id}`} variant='primary' align="center" sx={{ mb: 10}}>
          Learn More
        </Button>
        </CardActions>
      </Card>
        )}
    </Grid>
  );
}
