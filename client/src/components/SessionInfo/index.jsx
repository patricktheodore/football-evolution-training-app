import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


// Displays a  session card with scrollable controls for each type of session [private sessions, junior development program, senior performance programs, goalkeeprs, schools, strength and conditioning]

const SessionInfo = () => {
    return (
        <Grid item xs={6} lg={4}>
            <Card sx={{ minHeight: "20rem" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Train With Us!
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        We offer a wide range of sessions, dedicated to young and old, players beginning their football
                        journey, and experienced players looking to take their game to the next level.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/trainWithUs">
                        <Button size="small">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SessionInfo;