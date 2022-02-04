import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import Modal from './Modal';
import SessionInfo from '../SessionInfo';
import { Link } from 'react-router-dom';

export default function SessionCard(props) {
  return (
    <Grid item xs={12} lg={4}>
      <Card sx={{ flexGrow: 1, minHeight: "5rem" }} key={props.session._id}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.session.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Age: {props.session.min_age} | Max Age: {props.session.max_age}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {props.session.short_desc}
          </Typography>
        </CardContent>
          <Link to={`/sessions/${props.session._id}`}>
        <Button>
          Learn More
        </Button>
          </Link>
      </Card>
    </Grid>
  );
}
