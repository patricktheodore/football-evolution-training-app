import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { getAge } from '../../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PlayerRowById(props) {

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            id: props.player._id
        }
    })

    const [playerData, setPlayerData] = useState({})

    useEffect(() => {
        if (data) {
            setPlayerData({ ...data.user })
        }
    }, [data])

    const handleClick = (id) => {
        const playerId = id;
        window.location.href = `/player/${playerId}`;
    }

    return (

        <TableRow hover onClick={() => handleClick(playerData._id)} sx={{ '&:hover': { cursor: 'pointer'} }}>
            <TableCell align="center">{playerData.first_name}</TableCell>
            <TableCell align="center">{playerData.last_name}</TableCell>
            <TableCell align="center">{playerData.date_of_birth}</TableCell>
            <TableCell align="center">{getAge(playerData.date_of_birth)}</TableCell>
            <TableCell align="center">{playerData.email}</TableCell>
        </TableRow>
    );
}

