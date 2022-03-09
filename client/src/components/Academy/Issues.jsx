import React from 'react';
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';

export default function Issues() {
    return (
        <Grid item xs={12}>
            <Card sx={{ flexGrow: 1, borderRadius: 3 }} elevation={10}>
                <CardContent sx={{ mx: 4, my: 10 }}>
                    <Typography sx={{ mb: 5, textAlign: "center" }} variant="h5" component="div">
                        ISSUES FACING YOUNG AUSTRALIAN FOOTBALLERS
                    </Typography>
                    <Typography>
                        Reduced competitive &amp; curricular contact hour in comparison to other states and countries.
                        <br />
                        <br />
                        NPL players paying high cost &amp; debatable low value fees, partly due to requirements for a technical 
                        director and accredited coaches -
                        85% of who are parent coaches.
                        <br />
                        <br />
                        Our domestic professional league is not providing sufficient opportunities for our talented youth 
                        footballers in comparison to leading nations.
                        <br />
                        <br />
Australia has a healthy number of young footballers playing when compared to some leading nations, however, 97% of these players do not obtain 
enough contact hours per session/per week, significantly diminishing their opportunity for career progression. 
                        <br />
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
