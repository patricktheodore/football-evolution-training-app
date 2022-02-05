import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import StatsDisplay from "../components/StatsDisplay";
import Container from '@mui/material/Container';
import UpcomingSession from '../components/UpcomingSession';
import { QUERY_USER, GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Typography } from '@mui/material';
import { getOverall } from '../utils/helpers';

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
            <Typography sx= {{ mt: 15}}>
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
          </Typography>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 15}}>
            <h2>
                {userParam ? `${user.first_name}'s` : 'your'} profile.
            </h2>
            <StatsDisplay user={user}/>
            <Typography>
                Your Sessions
            </Typography>
            <UpcomingSession id={user.sessions[0]._id} />

            {/* {user.sessions.map((session) => (
                // console.log(session._id)
                <UpcomingSession id={session._id} key={session._id}/>
            ))}     */}
        </Container>
    );
}

export default Profile;