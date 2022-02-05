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
import { Link, useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { GET_ME, QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { initialize } from '../../utils/helpers';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';


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
          <VerifiedUserSharpIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
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
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 44, height: 44 }}>{initialize(user)}</Avatar>
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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
              right: 14,
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
        <MenuItem>
          <PersonOutlineSharpIcon sx={{ mr: 1.5 }} /> <Link to="/profile">Profile</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsApplicationsSharpIcon fontSize="small" /> <Link to="/account">Settings</Link>
          </ListItemIcon>
        </MenuItem>
        {isCoach()}
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <ExitToAppSharpIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
