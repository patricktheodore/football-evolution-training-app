import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_STATS } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UpdateStats(props) {
    const [formState, setFormState] = useState({
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physicality: 0,
        skills: 0,
        weak_foot_ability: 0,
        tactical: 0,
        psychological: 0
    });

    const [saveStats] = useMutation(SAVE_STATS);

    const handleFormSubmit = (event) => {
        console.log({ formState });
        saveStats({
            variables: {
                id: props.user._id,
                pace: formState.pace,
                shooting: formState.shooting,
                passing: formState.passing,
                dribbling: formState.dribbling,
                defending: formState.defending,
                physicality: formState.physicality,
                skills: formState.skills,
                weak_foot_ability: formState.weak_foot_ability,
                tactical: formState.tactical,
                psychological: formState.psychological,
            },
        });
    }

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

    const { data: currentUserStats } = useQuery(QUERY_USER, {
        variables: {
            id: props.user._id
        }
    });

    const playerStats = currentUserStats.user.stats[0]; 

    return (
        <div>
            <Button onClick={handleOpen}>Update Player Stats</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.user.first_name}'s Current Stats
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    name="pace"
                                    fullWidth
                                    id="pace"
                                    defaultValue={playerStats ? playerStats.pace : 0}
                                    label="Pace (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="shooting"
                                    fullWidth
                                    id="shooting"
                                    defaultValue={playerStats ? playerStats.shooting : 0}
                                    label="Shooting (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="passing"
                                    fullWidth
                                    id="passing"
                                    defaultValue={playerStats ? playerStats.passing : 0}
                                    label="Passing (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="dribbling"
                                    fullWidth
                                    id="dribbling"
                                    defaultValue={playerStats ? playerStats.dribbling : 0}
                                    label="Dribbling (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="defending"
                                    fullWidth
                                    id="defending"
                                    defaultValue={playerStats ? playerStats.defending : 0}
                                    label="Defending (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="physicality"
                                    fullWidth
                                    id="physicality"
                                    defaultValue={playerStats ? playerStats.physicality : 0}
                                    label="Physicality (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="skills"
                                    fullWidth
                                    id="skills"
                                    defaultValue={playerStats ? playerStats.skills : 0}
                                    label="Skills (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="weak_foot_ability"
                                    fullWidth
                                    id="weak_foot_ability"
                                    defaultValue={playerStats ? playerStats.weak_foot_ability : 0}
                                    label="Weak Foot Ability (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="tactical"
                                    fullWidth
                                    id="tactical"
                                    defaultValue={playerStats ? playerStats.tactical : 0}
                                    label="Tactical (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="psychological"
                                    fullWidth
                                    id="psychological"
                                    defaultValue={playerStats ? playerStats.psychological : 0}
                                    label="Psychological (0-99)"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            size='large'
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
