import React from 'react';
import { GET_ME, QUERY_SESSION } from '../../utils/queries';
import { REMOVE_USER_FROM_SESSION } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const UpcomingSession = (props) => {
  
  const sessionId = props.sessionId;
  const { loading, data, error } = useQuery(QUERY_SESSION, {
    variables: { id: sessionId }
  });

  const { data: me } = useQuery(GET_ME);

  const [sessionData, setSessionData] = useState({});
  const [removeUserFromSession, { err }] = useMutation(REMOVE_USER_FROM_SESSION);

  useEffect(() => {
    if (data) {
      setSessionData({...data.session})
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
      <div>
        <h4>{sessionData.title}</h4>
        <h4>
          {sessionData.long_desc}
        </h4>
        <Button
        onClick={handleRemoveSession}>
          Remove
        </Button>
      </div>
      )
    }
}


export default UpcomingSession;





