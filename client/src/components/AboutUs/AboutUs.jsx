import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function AboutUs() {
    return (
        <Grid item xs={12} lg={10}>
            <Card sx={{ flexGrow: 1, borderRadius: 3, my: 5 }} elevation={10}>
                <CardContent sx={{ mx: 4, my: 10 }}>
                    <Typography sx={{ textAlign: "center", mb: 5 }} variant="h5" component="div">
                        OUR STORY
                    </Typography>
                    <Typography>
                        FET was created and is managed by Head Coach &#38; Director, Greg Hart who has had
                        the privilege of experiencing elite football in the UK, South America and Australia.
                        <br />
                        <br />
                        Using those endeavours, relentless hours in studying the game, networking with some of
                        the best professionals globally, creating an experienced elite team of highly qualified
                        like-minded coaches, understanding modern day player needs, pathways and the passion to
                        develop aspiring players, amateurs through to professionals on a personal level is the
                        essence of FET.
                        <br />
                        <br />
                        We have proven our credibility already with outstanding feedback from players, coaches,
                        parents, teachers and more. FET has assisted player in obtaining professional opportunities
                        and some have been fortunate to enter the professional pathway.
                        <br />
                        <br />
                        Our ethos is not just for the elite footballer - FET offers adaptability to suit players
                        at any age and level. For instance, Across our junior players we constantly reiterate the
                        importance of being a respectful individual who possess qualities to encourage them to be
                        the best they can be so that they are prepared for all walks of life.
                        <br />
                        <br />
                        We improve the development/performance of players and coaches through our unique professional
                        standard private sessions, programs and online training platforms. FET is trusted by schools
                        to run their football specialist programs and the positive response from teachers, parents
                        and students is what drives us to continue to provide a superior service.
                        <br />
                        <br />
                        We place great emphasis on the 4 pillars surrounding football to ensure we are producing
                        COMPLETE players:
                        <ul>
                            <li>Technical</li>
                            <li>Tactical</li>
                            <li>Physiological</li>
                            <li>Psychological</li>
                        </ul>
                        Overall, our main objective is to provide players with an environment that allows them to
                        learn, be challenged, improve and most importantly enjoy their footballing experience!
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
