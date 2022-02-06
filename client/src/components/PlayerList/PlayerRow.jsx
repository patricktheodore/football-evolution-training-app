import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { getAge } from '../../utils/helpers';

export default function PlayerRow(props) {

    console.log(props);

    return (
        <TableRow>
            <TableCell align="center">{props.player.first_name}</TableCell>
            <TableCell align="center">{props.player.last_name}</TableCell>            
            <TableCell align="center">{props.player.date_of_birth}</TableCell>
            <TableCell align="center">{getAge(props.player.date_of_birth)}</TableCell>
            <TableCell align="center">{props.player.email}</TableCell>
            <TableCell align="center"><Button href={`/player/${props.player._id}`}>Edit</Button></TableCell>
        </TableRow>
    );
}
