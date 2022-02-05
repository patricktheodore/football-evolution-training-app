/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { QUERY_SESSION } from '../../utils/queries';
import { REMOVE_USER_FROM_SESSION } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Button } from '@mui/material'

const UpcomingSession = (id) => {
  
  const { loading, data } = useQuery(QUERY_SESSION, {
    variables: {
       _id: id 
      },
  });

  const session = data?.session;
  
  console.log(session);

  const [removeUserFromSession, {error}] = useMutation(REMOVE_USER_FROM_SESSION);
  

  async function handleRemoveSession(event) {
    event.preventDefault();

    const result = await removeUserFromSession({
      variables: {
        sessionId: id
      }
    });
    console.log({result});
  }

  return (
    <div>
            {session && (

                <div>
                    <h4>{session.title}</h4>
                    <h4>
                        {session.long_desc}

                    </h4>
                    <Button
                    onClick={handleRemoveSession}>
                            add to my schedule
                    </Button>
                </div>
            )}

        </div>
  )

}

export default UpcomingSession;
