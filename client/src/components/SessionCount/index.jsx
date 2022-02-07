import { CardContent, Grid, Card, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';

export default function SessionCount() {

    const { loading, data } = useQuery(QUERY_ALL_SESSIONS);

    let sessions = [];

    if (data) {
        sessions = data.sessions
        console.log(sessions);
    };


    return (
        <Grid item xs={12} md={6} lg={4}>
            {data && (

                <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography>
                        Total Sessions 
                    </Typography>
                    <Typography variant='h2'>
                        {data.sessions.length}
                    </Typography>
                </CardContent>
            </Card>
                )}

        </Grid>
    );
}
