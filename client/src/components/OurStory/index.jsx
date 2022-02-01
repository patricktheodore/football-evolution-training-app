import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const OurStory = () => {
    return (
        <Grid item xs={12} lg={8}>
            <Card sx={{ flexGrow: 1, minHeight: "20rem" }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                        OUR STORY
                    </Typography>
                    <Typography variant="body2">
                        FET was created and is managed by Head Coach &#38; Director, Greg Hart who has had
                        the privilege of experiencing elite football in the UK, South America and Australia.
                        <br />
                        <br />
                        Our ethos is not just for the elite footballer - FET offers adaptability to suit players
                        at any age and level. For instance, Across our junior players we constantly reiterate the
                        importance of being a respectful individual who possess qualities to encourage them to be
                        the best they can be so that they are prepared for all walks of life.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/ourStory">
                        <Button size="small">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default OurStory;