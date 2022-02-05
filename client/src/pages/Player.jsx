import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Container, Typography } from '@mui/material';
import { QUERY_USER } from '../utils/queries';
import StatsDisplay from '../components/StatsDisplay';
import UpcomingSession from '../components/UpcomingSession';
import UpdateStats from '../components/UpdateStats';

export default function PlayerDetails() {

    const { id } = useParams();

    const { data } = useQuery(QUERY_USER, {
        variables: {
            id: id
        }
    });

    const player = data?.user;

    console.log({player});

    return (
        <Container maxWidth="xl" sx={{ mt: 15 }}>
            {player && (
                <div>
                    <h2>
                        {player.first_name}'s profile.
                    </h2>
                    <StatsDisplay user={player} />
                    <UpdateStats user={player}/>
                    <Typography>
                    {player.first_name}'s Sessions
                    </Typography>
                    {player.sessions.map((session) => {
                        return <UpcomingSession sessionId={session._id} key={session._id} />
                    })}
                </div>
            )}
        </Container>
    );







}