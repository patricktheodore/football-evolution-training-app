import { useMutation, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ADD_USER_TO_SESSION } from '../utils/mutations';
import { GET_ME, QUERY_SESSION } from '../utils/queries';

export default function SessionDetails() {

    const { id } = useParams();

    const { data } = useQuery(QUERY_SESSION, {
        variables: {
            id: id,
        }
    });

    const { data: userData } = useQuery(GET_ME);
    
    const [addUserToSession, {error}] = useMutation(ADD_USER_TO_SESSION)
    
    const session = data?.session
    
    console.log({ session });
    
    async function handleSaveSession(event) {
        
        event.preventDefault();
        
        const result = await addUserToSession({
            variables: {
                sessionId: id,
            }
        });
        console.log({result});
        // 


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
                    onClick={handleSaveSession}>
                            add to my schedule
                    </Button>
                </div>
            )}

        </div>
    )
        ;
}
