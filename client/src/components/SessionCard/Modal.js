import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ADD_SESSION_TO_USER, ADD_USER_TO_SESSION } from '../../utils/mutations';
import { QUERY_USER, GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data } = useQuery(GET_ME);

  const user = data?.me;
  const session = '';

  const [addUser] = useMutation(ADD_USER_TO_SESSION);
  const [addSession] = useMutation(ADD_SESSION_TO_USER);
  
  const handleSaveSession = (sessionId) => {
    // USE MUTATION HERE
    addUser(sessionId)
    // get me._id and add to session._id.players[]

    // also, add session._id to me._id.sessions[]
  };

  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.session.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.session.long_desc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age Group: {props.session.min_age} - {props.session.max_age}
          </Typography>
          <Button onClick={handleSaveSession(props.session._id)}>
            Add Session To Schedule
            {/* will need user id, and session id.  */}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
