import { CardContent, Grid, Card, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../../utils/queries';

export default function CoachCount() {

    const { loading, data } = useQuery(QUERY_ALL_USERS);

    let users = [];

    if (data) {
        users = data.users
        console.log(users);
    };

    console.log(users);

    let coaches = users.filter(user => user.is_coach === true);

    console.log(coaches);

    return (
        <Grid item xs={12} md={6} lg={4}>
            {coaches && (
                <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography>
                        Total Coaches Employed 
                    </Typography>
                    <Typography variant='h2'>
                        {coaches.length}
                    </Typography>
                </CardContent>
            </Card>
                )}

        </Grid>
    );
}
