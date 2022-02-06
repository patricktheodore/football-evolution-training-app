/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_SESSIONS } from '../../utils/actions';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';
import SessionCard from '../SessionCard';
import { Grid, Container, Box, Card, CardContent, Typography } from '@mui/material';

export default function index() {
    const { data } = useQuery(QUERY_ALL_SESSIONS); 

    let sessions = [];
    if (data) {
        console.log(data);
        console.log(data.sessions);
        sessions = data.sessions
    }; 

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card sx={{ flexGrow: 1, borderRadius: 3 }}>
                            <CardContent sx={{ mx: 10, mt: 10 }} align="center">
                                <Typography sx={{ mb: 5 }} variant="h5" component="div" align='center'>
                                    TRAIN WITH US
                                </Typography>
                                <Typography sx={{ mb: 10 }}>
                                    We offer a wide range of sessions, dedicated to young and old, players beginning their football
                                    journey, and experienced players looking to take their game to the next level.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {sessions.map((session) => (
                        <SessionCard session={session} key={session._id}/>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}
