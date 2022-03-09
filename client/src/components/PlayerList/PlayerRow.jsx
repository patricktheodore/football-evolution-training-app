import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { getAge } from '../../utils/helpers';

export default function PlayerRow(props) {

    const handleClick = (id) => {
        const playerId = id;
        window.location.href = `/player/${playerId}`;
    }

    return (
        <TableRow hover onClick={() => handleClick(props.player._id)} sx={{ '&:hover': { cursor: 'pointer'} }}>
            <TableCell align="center">{props.player.first_name}</TableCell>
            <TableCell align="center">{props.player.last_name}</TableCell>
            <TableCell align="center">{props.player.date_of_birth}</TableCell>
            <TableCell align="center">{getAge(props.player.date_of_birth)}</TableCell>
            <TableCell align="center">{props.player.email}</TableCell>
        </TableRow>
    );
}
