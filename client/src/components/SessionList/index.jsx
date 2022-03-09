import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';
import SessionListCard from './sessionListCard.jsx';
import { Grid, Container, Box, Typography, Button } from '@mui/material';

export default function SessionList() {
    const { data } = useQuery(QUERY_ALL_SESSIONS);

    let sessions = [];
    if (data) {
        sessions = data.sessions
    };

    console.log(sessions);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, mt: 10, justifyContent: 'center', textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 'light' }} variant="h4" align='center'>
                    Session List
                </Typography>
                <Grid container spacing={2}>
                    {sessions.map((session) => (
                        <SessionListCard session={session} key={session._id} />
                    ))}
                </Grid>
                <Button href={`/addSession`}
                    size='large'
                    variant="contained"
                    align="center"
                    sx={{ my: 7.5, px: 5, backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00', color: '#dedede' }, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}>
                    New Session
                </Button>
            </Box>
        </Container>
    )
};