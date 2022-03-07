/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FEEDBACK } from '../../utils/mutations';
import DatePicker from '../DatePicker';
import moment from 'moment';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    width: '90vw',
    textAlign: 'center'
};

export default function addFeedback(props) {

    console.log(props.coach);
    console.log(props.player)

    const [formState, setFormState] = useState({
        body: '',
        session: '',
        sessionDate: '```'
    });

    const coach = `Coach ${props.coach.first_name} ${props.coach.last_name}`;

    const [saveFeedback] = useMutation(ADD_FEEDBACK);

    const handleFormSubmit = (event) => {
        console.log({ formState });
        saveFeedback({
            variables: {
                playerId: props.player._id,
                coach: coach,
                body: formState.body,
                session: formState.session,
                sessionDate: formState.sessionDate
            }
        })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function editDate(newDate) {
        newDate = moment(newDate).format('DD/MM/yyyy');
        setFormState({
            ...formState,
            sessionDate: newDate,
        })
    }

    return (
        <div>
            <Button
                sx={{
                    mt: 2, mb: 5, backgroundColor: '#404040',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: "#07c400",
                        color: "white",
                    },
                    height: '2rem', width: '15rem'
                }}
                onClick={handleOpen}>
                Add Feedback
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>
                        Leave Feedback For {props.player.first_name} {props.player.last_name}
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    inputProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    InputLabelProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    name="session"
                                    fullWidth
                                    id="session"
                                    label="Session Reference"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={3} textAlign={'center'}>
                                <DatePicker onValue={editDate} type={'Session Date'} />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    inputProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    InputLabelProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    name="coach"
                                    fullWidth
                                    label="Coach"
                                    defaultValue={`${props.coach.first_name} ${props.coach.last_name}`}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    InputLabelProps={{ style: { color: 'black', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    name="body"
                                    fullWidth
                                    label="Feedback"
                                    multiline
                                    rows={4}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            size='large'
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2, px: 5, color: 'white', backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00' }, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
                        >
                            Leave Feedback
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
