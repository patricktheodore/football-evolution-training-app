import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Auth from '../../utils/auth';
import MenuList from '@mui/material/MenuList';
import Avatar from './Avatar';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function showNavigation() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (Auth.loggedIn()) {
    return (
      <Avatar />
    );
  } else {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/login">
            Sign In
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/register">
            Register
          </Link>
        </li>
      </ul>
    );
  }
};

function drawerNavigation() {

  if (Auth.loggedIn()) {
    return (
      <MenuItem>
        <ListItemText>
          <Link to="/profile">
            My Profile
          </Link>
        </ListItemText>
      </MenuItem>
    );
  } else {
    return (
      <div>
        <MenuItem>
          <ListItemText>
            <Link to="/login">
              Sign In
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Link to="/register">
              Register
            </Link>
          </ListItemText>
        </MenuItem>
      </div>
    );
  }
};



export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/">
              FET
            </Link>
          </Typography>
          {showNavigation()}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuList dense>
          <MenuItem>
            <ListItemText>
              <Link to="/" onClick={handleDrawerClose}>
                Home
              </Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <Link to="/aboutUs" onClick={handleDrawerClose}>
                About Us
              </Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <Link to="/trainWithUs" onClick={handleDrawerClose}>
                Train With Us
              </Link>
            </ListItemText>
          </MenuItem>
          <Divider />
          {drawerNavigation()}
        </MenuList>
      </Drawer>
    </Box>
  );
}
