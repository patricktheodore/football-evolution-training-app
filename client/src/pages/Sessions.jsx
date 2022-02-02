import React from 'react';
import SessionList from "../components/SessionList";
import Container from '@mui/material/Container';

const Sessions = () => {
    return (
        <Container maxWidth="xl">
            <SessionList />
        </Container>
    );
}

export default Sessions;