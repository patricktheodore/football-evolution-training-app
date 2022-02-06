import { useMutation, useQuery } from '@apollo/client';
import { Button, Paper, TableContainer, TableCell, TableBody, Table, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ADD_USER_TO_SESSION } from '../utils/mutations';
import { GET_ME, QUERY_SESSION } from '../utils/queries';
import PlayerRowById from '../components/PlayerList/PlayerRowById';

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

        event.preventDefault();

        const result = await addUserToSession({
            variables: {
                sessionId: id,
            }
        });
        console.log({ result });
    }

    return (
        <div>
            {session && userData && (
                <div>
                    <h4>{session.title}</h4>
                    <h4>
                        {session.long_desc}
                    </h4>
                    {
                        userData.me.is_coach === true
                            ?
                            ''
                            : <Button onClick={handleSaveSession}>add to my schedule</Button>
                    }
                    <TableContainer component={Paper} sx={{ mt: 15 }}>
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
                </div>
            )}

        </div>
    )
        ;
}
