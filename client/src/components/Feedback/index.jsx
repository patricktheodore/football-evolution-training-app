import React from 'react'
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import { formatDate } from '../../utils/helpers';
import moment from 'moment';

export default function feedback(props) {
    return (
        <div>
            <Card className='card-content' sx={{ flexGrow: 1, borderRadius: 3, mt: 5, mx: 2.5, px: 15 }}>
                <CardContent align="center">
                    <Typography sx={{ mt: 4 }} variant="h5" component="div" align='center'>
                        <Box component="span" fontWeight={'bold'}>{props.feedback.session}</Box>
                    </Typography>
                    <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary" align='center'>
                        <Box component="span" fontWeight={'light'} fontSize={'0.8rem'}>Session Date: {props.feedback.sessionDate}</Box>   
                    </Typography>
                    <Typography sx={{ mb: 4 }}>
                        {props.feedback.body}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align='center'>
                        Feedback Provided By <Box component="span" fontWeight={'bold'}>{props.feedback.coach}</Box>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
