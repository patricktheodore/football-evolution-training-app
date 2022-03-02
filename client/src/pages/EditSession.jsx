import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ME, QUERY_SESSION } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_SESSION } from '../utils/mutations';
import Auth from '../utils/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Button, Grid, TextField, Container, CssBaseline, Box, Radio, RadioGroup, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, FormControl, Divider } from '@mui/material'


const theme = createTheme();

export default function EditSession() {

    const [formState, setFormState] = useState({
        title: '',
        type: '',
        short_desc: '',
        long_desc: '',
        min_age: '',
        max_age: '',
        date: '',
        time: '',
        location: ''
    });

    const [updateSession] = useMutation(UPDATE_SESSION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log({ formState });

        const mutationResponse = await updateSession({
            variables: {
                sessionId: id,
                title: formState.title,
                type: formState.type,
                short_desc: formState.short_desc,
                long_desc: formState.long_desc,
                min_age: formState.min_age,
                max_age: formState.max_age,
                date: formState.date,
                time: formState.time,
                location: formState.location
            }
        });
        const token = mutationResponse.data.updateUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const { id } = useParams();

    const { data } = useQuery(QUERY_SESSION, {
        variables: {
            id: id,
        }
    });

    const session = data?.session

    useEffect(() => {
        if (data) {
            setFormState({ ...session })
        }
    }, [data, session]);



    return (
        <ThemeProvider theme={theme}>
            {session ? (
                <Container component="main" maxWidth="l">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                        Update Session: {session.title}
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    InputLabelProps={{ style: { fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif` } }}
                                    autoComplete="title"
                                    name="title"
                                    fullWidth
                                    id="title"
                                    defaultValue={session.title}
                                    label="Title"
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
                            sx={{ mt: 3, mb: 2, backgroundColor: '#07c400', '&:hover': { backgroundColor: '#047a00' }, textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
                            >
                            Update
                        </Button>
                        <Button
                            href="/profile"
                            fullWidth
                            sx={{ mt: 3, mb: 2, color: '#171717', textTransform: 'none', fontFamily: `'Raleway', 'Helvetica', 'Arial', sans-serif`, fontSize: '1rem' }}
                            >
                            Back To Profile
                        </Button>
                    </Box>
                </Box>
            </Container>
        ) : (
            <Typography>
            Loading...
          </Typography>
        )}
        </ThemeProvider>
    )
}
