/* eslint-disable no-multiple-empty-lines */
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';


const NavBar = () => {
  // using hooks here for styling and media queries

  const [mobileOpen, setMobileOpen] = useState(false); // this is for the drawer to open and close on mobile devices
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} // This is for the menu button to open the drawer
            className={classes.menuButton} // to style the menu button
          >
            <Menu />
          </IconButton>
          )}
          {/* Icon buttons for the NavBar or Menu Bar  */}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {/* this is for the Toggling of Light mode and dark mode */}
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          {/* This is for the Login and Profile section */}
          <div>
            { !isAuthenticated ? AccountCircle(
              <Button
                color="inherit"
                onClick={() => {}}
              >
                Login &nbsp; <AccountCircle />
              </Button>,
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => {}}
              >
                {/* This is for AUthenticated users section to show their profile icon along with checking if it is a mobile device or not  */}
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile Picture"
                  src="https://avatarfiles.alphacoders.com/341/341231.png"
                />
              </Button>

            )}
          </div>

          {/* if it is a mobile device, then show the search button at last */}
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              // className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>

          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
