import React from 'react';
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';

export default function AcademyStructure() {
    return (
        <Grid item xs={12} lg={6}>
            <Card sx={{ flexGrow: 1, borderRadius: 3 }} elevation={10}>
                <CardContent sx={{ mx: 4, my: 10 }}>
                    <Typography sx={{ mb: 5, textAlign: "center" }} variant="h5" component="div">
                        ACADEMY STRUCTURE
                    </Typography>
                    <Typography>
                        3 extra curricular sessions available per week including:
                    </Typography>
                    <Stack direction={'row'} justifyContent='center'>
                        <ul className='text-left'>
                            <li textAlign='left'>Technical</li>
                            <li>Strength &amp; Conditioning</li>
                            <li>Injury Prevention</li>
                            <li>Tactical</li>
                            <li>Positioning</li>
                        </ul>
                        <ul className='text-left'>
                            <li>Goalkepper Specialist</li>
                            <li>Screening</li>
                            <li>Analysis</li>
                            <li>Mentoring</li>
                            <li>Psychological</li>
                        </ul>
                    </Stack>
                    <Typography>
                        Learning a style of play &amp; developing a clear identity.
                        <br />
                        <br />
                        Every 3 weeks the FET Academy will play other WA Clubs, Academies or Institutions.
                        <br />
                        <br />
                        Our Academy players will be given opportunities to play in tournaments as well as experience tours.
                        <br />
                        <br />
                        Conducted over 30 weeks across terms 1-3.
                        <br />
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
