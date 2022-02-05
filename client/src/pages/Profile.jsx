import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import StatsDisplay from "../components/StatsDisplay";
import Container from '@mui/material/Container';
import UpcomingSession from '../components/UpcomingSession';
import { QUERY_USER, GET_ME, QUERY_SESSION } from '../utils/queries';
import Auth from '../utils/auth';
import { Typography } from '@mui/material';
import { getOverall } from '../utils/helpers';
import { useState } from 'react';
import { useEffect } from 'react';

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
        <Container maxWidth="xl" sx={{ mt: 15 }}>
            {user && (
                <div>
                    <h2>
                        {userParam ? `${user.first_name}'s` : 'your'} profile.
                    </h2>
                    <Link to={"/account"}> Update Info
                    </Link>
                    <StatsDisplay user={user} />
                    <Typography>
                        Your Sessions
                    </Typography>
                    {user.sessions.map((session) => {
                        return <UpcomingSession sessionId={session._id} key={session._id} />
                    })}
                </div>
            )}
        </Container>
    );
}

export default Profile;