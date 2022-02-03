import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_SESSIONS
} from '../../utils/actions';
import { QUERY_ALL_SESSIONS } from '../../utils/queries';
import SessionCard from '../SessionCard';
import { Grid } from '@mui/material';

function SessionList() {
    const [state, dispatch] = useStoreContext();

    const { sessions } = state;

    const { loading, data: sessionData } = useQuery(QUERY_ALL_SESSIONS);

    useEffect(() => {
        if (sessionData) {
            dispatch({
                type: UPDATE_SESSIONS,
                sessions: sessionData.sessions
            })
        }
    }, [sessionData, loading, dispatch]);

    return (
        <Grid container spacing={2}>
            <SessionCard session={sessions[0]} />
        {/* {sessions.map((session) => (
          <SessionCard session={session} />
        ))} */}
      </Grid>
    )
}

export default SessionList;