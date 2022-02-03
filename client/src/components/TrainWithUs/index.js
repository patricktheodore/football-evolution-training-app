/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_SESSIONS
} from '../../utils/actions';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';
import SessionCard from '../SessionCard';
import { Grid, Container, Box, Card, CardContent, Typography } from '@mui/material';


export default function index() {
    // const [state, dispatch] = useStoreContext();

    // const { sessions } = state;

    const { data } = useQuery(QUERY_ALL_SESSIONS); 
    let sessions = [];
    if (data) {
        sessions = data.sessions
    }; 


    // useEffect(() => {
    //     if (sessionData) {
    //         dispatch({
    //             type: UPDATE_SESSIONS,
    //             sessions: sessionData.sessions
    //         })
    //     }
    // }, [sessionData, loading, dispatch]);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                    Train With Us!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.primary">
                                    We offer a wide range of sessions, dedicated to young and old, players beginning their football
                                    journey, and experienced players looking to take their game to the next level.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* <SessionCard session={sessions[0]} /> */}

                    {sessions.map((session) => (
                        <SessionCard session={session} />
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}
