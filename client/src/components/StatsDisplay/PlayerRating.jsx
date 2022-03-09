import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { getOverall } from '../../utils/helpers';


export default function PlayerRating(props) {
    const playerRating = getOverall(props.user.stats[0]);

    return (
        <Grid item xs={10} md={6} lg={4}>
            <Card sx={{ position: 'relative', display: 'inline-flex', borderRadius: 3 }}>
                <CardContent sx={{ justifyContent: 'center'}} align='center'>
                    <Typography variant="h4" align='center'>
                        Overall Player Rating
                    </Typography>
                    <CircularProgress
                        variant="determinate"
                        value={playerRating}
                        size={250}
                        thickness={2.5}
                        sx={{ color: "#07c400", my: 5 }}
                    />
                    <Box
                        sx={{
                            top: -20,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h1" component="div" color="text.secondary">
                            {playerRating}
                        </Typography>
                    </Box>
                    <Typography align='center' variant='h5'>
                        Train more to increase your stats.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
