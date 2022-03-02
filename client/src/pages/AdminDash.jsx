import { Container, Typography } from '@mui/material';
import React from 'react';
import PlayerList from '../components/PlayerList';
import SessionList from '../components/SessionList';

export default function AdminDash() {
  return(
    <Container maxWidth="l">
      <PlayerList />
      <SessionList />
    </Container>
  )
}
