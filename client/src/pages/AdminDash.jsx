import { Container, Typography } from '@mui/material';
import React from 'react';
import PlayerList from '../components/PlayerList';
import SessionList from '../components/SessionList';
// list of sessions, the amount of players currently subscribed to that session with a button to show the players details. each player can be clicked on to see profile. 
// player profiles show player details, details of sessions they are subscribed to, an option to upload stats, and feedback. 
// option to update session details. 
// list of coaches (users, with .is_coach === true)



export default function AdminDash() {
  return(
    <Container maxWidth="xl">
      <PlayerList />
      <SessionList />
    </Container>
  )
}
