import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../../utils/queries';
import { Typography, TableContainer, Table, TableCell, TableHead, TableRow, Paper, TableBody, Container } from '@mui/material';
import PlayerRow from './PlayerRow';


const TotalPlayers = () => {

    const { loading, data } = useQuery(QUERY_ALL_USERS);

    let users = [];

    if (data) {
        users = data.users
        console.log(users);
    };

    return (
        <Container maxWidth='xl' >
            <Typography sx={{ fontWeight: 'light' }} variant="h4" align='center'>
                Player List
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
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
                        {users.map((user) => {
                            return <PlayerRow player={user} key={user._id} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TotalPlayers;