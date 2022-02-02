import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function ValuesAndPhilosophy() {
    return (
        <Grid item xs={12} lg={10}>
            <Card sx={{ flexGrow: 1, minHeight: "15rem" }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5, textAlign: "center" }} variant="h5" component="div">
                        VALUES
                    </Typography>
                    <Typography variant="body2">
                        At FET we offer a multitude of football specialist services for players ranging from beginners through to
                        elite professionals from around the globe. In addition to our highly reputable sessions held here in Perth,
                        WA we also offer a sophisticated online football platform that allows us to provide our elite services to
                        aspiring players around the world.
                        <br />
                        <br />
                        We place great importance regarding the standard of a player's environment, on and off the pitch. Throughout
                        our environment and ethos we aim to promote how values in football correlate to and support a person's life
                        values. A person with strong mentality, character and dedication are consistently proven qualities of those who
                        succeed on and off the pitch.
                        <br />
                        <br />
                        Not only do we aim to take our players game to the next level, we want to also develop their mental skills
                        required for our players to succeed in life, and be confident, productive people. FET's environment welcomes
                        like-minded individuals, coming together to support each other in the pursuit of continuous improvement.
                        <br />
                        <br />
                        Above all, we value a professional, relentless work ethic and furthermore, the ability to maintain a strong
                        level of resilience through ones footballing pursuit. Our team is more than understanding that players come
                        from a variety of backgrounds in life, have different needs and are at different stages in their development/
                        performances.
                        <br />
                        <br />
                        Our mission is to play a significant role in players progressing across their footballing journeys, providing
                        raw opportunities to succeed and building resilient, well-educated footballers for the future.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1, mt: 2 }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5, textAlign: "center" }} variant="h5" component="div">
                        PHILOSOPHIES
                    </Typography>
                    <Typography variant="body2">
                        Our Philosophy is to improve the development/performance of players and coaches through our unique professional 
                        standard private sessions, programs and online training platforms. We aim to inspire our players through our 
                        professional coaches experiences, knowledge and personalities.
                        <br />
                        <br />
                        Our team strive to energise our players so they feel able to play with confidence, whatever level they are playing 
                        at. We deliver training settings that are engaging, high paced, energetic, and loud. Our team provide players with 
                        opportunities to learn, be challenged, improve and most importantly enjoy their football.
                        <br />
                        <br />
                        We build relationships with players so they can feel completely welcome and accepted in our environment, players 
                        will be asked to come out and give their best every time they train with us. We hold players accountable, hoping 
                        they too will learn to hold themselves and those around them accountable as a result.
                        <br />
                        <br />
                        Developing better people to build better players.
                        <br />
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
