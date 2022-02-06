import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { initialize } from '../../utils/helpers';
import {  Stack } from '@mui/material';
import '../../styles/appBar.css';



export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout()
  };



  const { loading, data } = useQuery(GET_ME);

  const user = data?.me || {};

  const isCoach = () => {
    if (user.is_coach) {
      return (
        <MenuItem>
          <ListItemIcon>
            <Link to="/adminDash" className='menu-link'>
              Dashboard
            </Link>
          </ListItemIcon>
        </MenuItem>
      )
    } else {
      return
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2, mr: 3 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50, backgroundColor: 'white', color: "black", fontSize: '1.5rem', fontWeight: 'lighter' }}>{initialize(user)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 200,
            textOverflow: 'ellipsis',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            borderRadius: 3,
            mt: 0,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 30,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <Stack direction='column' sx={{ ml: 2, mt: 1, mb: 1.5 }}>
            <Typography sx={{ fontSize: '1rem' }}>{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'light' }}>{user.email}</Typography>
          </Stack>
        <Divider />
        <MenuItem sx={{ mt: 1}}>
          <Link to="/profile" className='menu-link'>Profile</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/account" className='menu-link'>Settings</Link>
        </MenuItem>
        {isCoach()}
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Link to="/" className='menu-link'>Sign Out</Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
