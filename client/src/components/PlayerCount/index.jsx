import { CardContent, Grid, Card, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../../utils/queries';

export default function PlayerCount() {

    const { loading, data } = useQuery(QUERY_ALL_USERS);

    let users = [];

    if (data) {
        users = data.users
    };


    return (
        <Grid item xs={12} md={6} lg={4}>
            {data && (

                <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography>
                        Total Active Players
                    </Typography>
                    <Typography variant='h2'>
                        {data.users.length}
                    </Typography>
                </CardContent>
            </Card>
                )}

        </Grid>
    );
}
