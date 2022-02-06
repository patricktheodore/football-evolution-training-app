import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';
import SessionListCard from './sessionListCard.jsx';
import { Grid, Container, Box } from '@mui/material';

export default function SessionList() {
    const { data } = useQuery(QUERY_ALL_SESSIONS); 

    let sessions = [];
    if (data) {
        sessions = data.sessions
    }; 

    console.log(sessions);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, mt: 10 }}>
                <Grid container spacing={2}>
                    {sessions.map((session) => (
                        <SessionListCard session={session} key={session._id}/>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
};