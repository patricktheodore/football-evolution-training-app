import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function SessionCard(props) {
  return (
      <Grid item xs={12} lg={4}>
    <Card sx={{ flexGrow: 1, minHeight: "5rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.session.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age Group: {props.session.age_group} | Current Players in Program: {props.session.players.length}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {props.session.short_desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
  );
}
