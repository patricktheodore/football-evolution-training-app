import { useMutation, useQuery } from '@apollo/client';
import { Button, Paper, TableContainer, TableCell, TableBody, Table, TableHead, TableRow, Container, CardContent, Card, Typography, CardActions, Link } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ADD_USER_TO_SESSION } from '../utils/mutations';
import { GET_ME, QUERY_SESSION } from '../utils/queries';
import PlayerRowById from '../components/PlayerList/PlayerRowById';
import '../styles/cardStyle.css';


export default function SessionDetails() {

    const { id } = useParams();

    const { data } = useQuery(QUERY_SESSION, {
        variables: {
            id: id,
        }
    });

    const { data: userData } = useQuery(GET_ME);

    console.log(userData);

    const [addUserToSession, { error }] = useMutation(ADD_USER_TO_SESSION)

    const session = data?.session

    async function handleSaveSession(event) {
        const result = await addUserToSession({
            variables: {
                sessionId: id,
            }
        });
        console.log({ result });
        window.location.reload();
    }

    if (!userData) {
        return (
            <Container sm={12}>
                <Card elevation={0}>
                    <CardContent align='center' sx={{ mt: 10 }}>
                        <Typography variant='h4'>
                            Please <Link className='no-auth' href="/login">Login</Link> or <Link className='no-auth' href='/Register'>Sign Up</Link> to view more information.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        )
    }

    return (
        <Container sm={12} lg={10}>
            <Card elevation={0}>
                {session && userData && (
                    <CardContent className='card-content home-container' sx={{ mx: 10, mt: 10 }} align="justify">
                        <Typography sx={{ mb: 2 }} variant="h4" component="div" align='center'>
                            {session.title}
                        </Typography>
                        <Typography color="text.secondary" align='center'>
                            Min Age: {session.min_age} | Max Age: {session.max_age}
                        </Typography>
                        <Typography color="text.secondary" align='center' sx={{ mb: 4 }}>
                            Location: {session.location} |
                            Time: {session.time}
                        </Typography>
                        <Typography align='center'>
                            {session.long_desc}
                        </Typography>
                        {
                            userData.me.is_coach === true
                                ?
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant='secondary' align="center" sx={{ mt: 5, fontSize: '1rem' }} href={`/editSession/${id}`}>Edit Session Details!</Button>
                                </CardActions>
                                : <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant='secondary' align="center" sx={{ mt: 5, fontSize: '1rem' }} onClick={handleSaveSession}>Sign Up To This Session!</Button>
                                </CardActions>
                        }
                        <Typography align='center' variant='h5' sx={{ mt: 10 }}>
                            Players Signed Up For This Session
                        </Typography>
                        <TableContainer component={Paper} sx={{ mt: 5, mb: 5, minWidth: '80%' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>First Name</TableCell>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Last Name</TableCell>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Date of Birth</TableCell>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Age</TableCell>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Email</TableCell>
                                        <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {session.players.map((player) => {
                                        return <PlayerRowById player={player} key={player._id} />
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                )}
            </Card>
        </Container>
    )
        ;
}
