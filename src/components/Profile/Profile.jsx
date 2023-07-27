import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp, Favorite } from '@mui/icons-material';
import { selectUser } from '../../features/auth';

const Profile = () => {
  console.log('Profile');
  const { user } = useSelector(selectUser);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const FavoriteMovies = user.favoriteMovies;
  console.log(user);
  return (
    <Box>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          My Profile - {user.username }
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp;
          <ExitToApp />
        </Button>
      </Box>
      {!FavoriteMovies.length ? <Typography variant="h5"> Add favourite or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            <Typography variant="h5">Favourite Movies</Typography>
          </Box>
        )}
    </Box>
  );
};

export default Profile;
