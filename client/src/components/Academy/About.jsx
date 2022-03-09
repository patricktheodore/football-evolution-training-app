import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function About() {
    return (
        <Grid item xs={12} lg={6}>
        <Card sx={{ flexGrow: 1, borderRadius: 3 }} elevation={10}>
            <CardContent sx={{ mx: 4, my: 10 }}>
                <Typography sx={{ mb: 5, textAlign: "center" }} variant="h5" component="div">
                    ABOUT
                </Typography>
                <Typography>
                    The FET Academy complements the 'Traditional' Club approach for U9 - U16 Footballers. Created to provide the best 
                    Developmental support with increased quality contact hours.
                    <br />
                    <br />
                    A model inspired from east coast academies that has showcased success in producing players who are strong enough to 
                    progress into professional clubs.
                    <br />
                    <br />
                    Players can only be accepted into the FET Academy through our trial process and/or invitation externally or
                    internally through promotion from our development programs.
                    <br />
                    <br />
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        )
}
