import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Container, Typography, Grid, Stack } from '@mui/material';
import { QUERY_USER, GET_ME } from '../utils/queries';
import StatsDisplay from '../components/StatsDisplay';
import UpcomingSession from '../components/UpcomingSession';
import UpdateStats from '../components/UpdateStats';
import PlayerRating from '../components/StatsDisplay/PlayerRating';

export default function PlayerDetails() {

    const { id } = useParams();
    const { data } = useQuery(QUERY_USER, {
        variables: {
            id: id
        }
    });
    const player = data?.user;
    console.log({ player });

    const { data: userData } = useQuery(GET_ME);


    return (
        <Container maxWidth="l" sx={{ mt: 15, mb: 10 }}>
            {player && userData && (
                <Container>
                    <Stack direction="column" spacing={0} sx={{ alignItems: 'center', mb: 2 }}>
                        <Typography sx={{ mb: 1 }} variant="h4" align='center'>
                            {player.first_name} {player.last_name}'s Profile
                        </Typography >
                        <Typography sx={{ mb: 1 }} align='center'>
                            {player.email}
                        </Typography >
                        {userData.me.is_coach === true ? <UpdateStats user={player} /> : '' }
                    </Stack>
                    <Grid container spacing={2} align={'center'}>
                        <StatsDisplay user={player} />
                        <PlayerRating user={player} />
                    </Grid>
                    <Typography sx={{ mb: 1, mt: 10 }} variant="h5" align='center'>
                        {player.first_name}'s Upcoming Sessions
                    </Typography>
                    {player.sessions.map((session) => {
                        return <UpcomingSession sessionId={session._id} key={session._id} />
                    })}
                </Container>
            )}
        </Container>
    );







}