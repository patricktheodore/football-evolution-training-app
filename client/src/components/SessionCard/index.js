import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Modal from './Modal';

export default function SessionCard(props) {
  return (
    <Grid item xs={12} lg={4}>
      <Card sx={{ flexGrow: 1, minHeight: "5rem" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.session.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Age: {props.session.min_age} | Max Age: {props.session.max_age} | Current Players in Program: {props.session.players.length}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {props.session.short_desc}
          </Typography>
        </CardContent>
        <Modal session={props.session}/>
      </Card>
    </Grid>
  );
}
