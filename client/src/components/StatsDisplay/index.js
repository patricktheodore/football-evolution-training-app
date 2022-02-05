import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getOverall } from '../../utils/helpers';
import { Typography } from '@mui/material';


function StatsDisplay(props) {
  if (!props.user.stats[0]) {
    return (
      <TableContainer component={Paper}>
      <Typography>
        Current Rating: 0 | 
        Waiting on Coach Feedback
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>First Name</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Last Name</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Preferred Position</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Preferred Foot</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Pace</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Shooting</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Passing</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Dribbling</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Physicality</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Skills</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Weak Foot</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Tactical</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Psychological</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{props.user.first_name}</TableCell>
            <TableCell align="center">{props.user.last_name}</TableCell>
            <TableCell align="center">{props.user.preffered_position}</TableCell>
            <TableCell align="center">{props.user.preffered_foot}</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    )
  }


  return (
    <TableContainer component={Paper}>
      <Typography>
        overall rating: {getOverall(props.user.stats[0])}

      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>First Name</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Last Name</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Preferred Position</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Preferred Foot</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Pace</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Shooting</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Passing</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Dribbling</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Physicality</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Skills</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Weak Foot</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Tactical</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', m: 1 }}>Psychological</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{props.user.first_name}</TableCell>
            <TableCell align="center">{props.user.last_name}</TableCell>
            <TableCell align="center">{props.user.preffered_position}</TableCell>
            <TableCell align="center">{props.user.preffered_foot}</TableCell>
            <TableCell align="center">{props.user.stats[0].pace}</TableCell>
            <TableCell align="center">{props.user.stats[0].shooting}</TableCell>
            <TableCell align="center">{props.user.stats[0].dribbling}</TableCell>
            <TableCell align="center">{props.user.stats[0].defending}</TableCell>
            <TableCell align="center">{props.user.stats[0].physicality}</TableCell>
            <TableCell align="center">{props.user.stats[0].skills}</TableCell>
            <TableCell align="center">{props.user.stats[0].weak_foot_ability}</TableCell>
            <TableCell align="center">{props.user.stats[0].tactical}</TableCell>
            <TableCell align="center">{props.user.stats[0].psychological}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatsDisplay;