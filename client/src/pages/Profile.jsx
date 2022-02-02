import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import StatsDisplay from "../components/StatsDisplay";
import Container from '@mui/material/Container';

import { QUERY_USER, GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

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
            <h4>
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
          </h4>
        );
    }



    return (
        <Container maxWidth="xl">
            <h2>
                {userParam ? `${user.first_name}'s` : 'your'} profile.
            </h2>
            <StatsDisplay user={user}/>
        </Container>
    );
}

export default Profile;