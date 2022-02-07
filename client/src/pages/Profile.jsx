import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import StatsDisplay from "../components/StatsDisplay";
import Container from '@mui/material/Container';
import UpcomingSession from '../components/UpcomingSession';
import { QUERY_USER, GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Button, Grid, Stack, Typography } from '@mui/material';
import PlayerRating from '../components/StatsDisplay/PlayerRating';

const Profile = () => {
    const { _id: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
        variables: { _id: userParam },
    });

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
        return <Link to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?._id) {
        return (
            <Typography sx={{ mt: 15 }}>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </Typography>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 15, mb: 10 }}>
            {user && (
                <Container>
                    <Stack direction="column" spacing={0} sx={{ alignItems: 'center', mb: 10 }}>
                        <Typography sx={{ mb: 1 }} variant="h4" component="div" align='center'>
                            {userParam ? `${user.first_name}'s` : 'Your'} Profile
                        </Typography >
                        <Button href={"/account"} variant="primary" sx={{ width: '10rem' }}> Update Details</Button>
                    </Stack>
                    <Grid container spacing={2} align={'center'} sx={{ justifyContent: "center"}}>
                        <StatsDisplay user={user} />
                        <PlayerRating user={user} />
                    </Grid>
                    <Typography align='center' variant='h4' sx={{ mt: 10 }}>
                        Upcoming Sessions
                    </Typography>
                    {user.sessions.map((session) => {
                        return <UpcomingSession sessionId={session._id} key={session._id} />
                    })}
                </Container>
            )}
        </Container>
    );
}

export default Profile;