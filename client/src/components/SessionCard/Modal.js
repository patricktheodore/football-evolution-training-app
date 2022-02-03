import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_USER_TO_SESSION } from '../../utils/actions';

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
  
  const handleSaveSession = (sessionId) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useStoreContext();
    console.log(props.session);
    console.log(sessionId);

    const { session } = state;

    dispatch({
      type: ADD_USER_TO_SESSION,
      session: { ...session, sessionId }
    });

  }

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
            Sign Up For Session
          </Button>
          {/* add button to add this session to users profile */}
        </Box>
      </Modal>
    </div>
  );
}
