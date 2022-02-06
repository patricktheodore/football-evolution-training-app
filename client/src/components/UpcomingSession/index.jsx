import React from 'react';
import { GET_ME, QUERY_SESSION } from '../../utils/queries';
import { REMOVE_USER_FROM_SESSION } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const UpcomingSession = (props) => {

  const sessionId = props.sessionId;
  const { loading, data, error } = useQuery(QUERY_SESSION, {
    variables: { id: sessionId }
  });

  const { data: user } = useQuery(GET_ME);

  const me = user?.me;

  console.log({ me });

  const [sessionData, setSessionData] = useState({});
  const [removeUserFromSession, { err }] = useMutation(REMOVE_USER_FROM_SESSION);

  useEffect(() => {
    if (data) {
      setSessionData({ ...data.session })
    }
  }, [data])


  const handleRemoveSession = async () => {

    try {
      const result = await removeUserFromSession({
        variables: {
          sessionId: sessionId
        }
      });
      console.log({ result });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>

  if (sessionData) {

    return (
      <Card sx={{ flexGrow: 1, borderRadius: 3, mt: 5, mx: 2.5, px: 15 }}>
        <CardContent align="center">
          <Typography sx={{ mb: 1.5, mt: 4 }} variant="h5" component="div" align='center'>
            Session: {sessionData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center'>
            Min Age: {sessionData.min_age} | Max Age: {sessionData.max_age}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center' sx={{ mb: 2 }}>
            Time: {sessionData.time} | Location: {sessionData.location}
          </Typography>
          <Typography>
            {sessionData.long_desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', mb: 6 }}>
          {me.is_coach === true ? '' :
            <Button
              variant='delete'
              onClick={handleRemoveSession}>
              Remove
            </Button>
          }
        </CardActions>
      </Card>
    )
  }
}


export default UpcomingSession;





