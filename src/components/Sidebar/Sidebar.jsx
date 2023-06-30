import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
// importing the useGetGenresQuery from TMDB.js
import { useGetGenresQuery } from '../../services/TMDB';
// importing the icons from Asset
import GenreIcon from '../../assets/genres';
// importing the Reducer genreorCategory from store.js
import { selectGenreorCategory } from '../../features/currentGenreorCategory';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  // const demoCategories = ['Comedy', 'Action', 'Horror', 'Drama', 'Animation', 'Romannce'];
  const Categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Latest', value: 'upcoming' },
  ];

  const dispatch = useDispatch(); // to send an action to the store

  const { data, isFetching } = useGetGenresQuery();
  // console.log(data);

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectGenreorCategory(value))} button>
              <ListItemIcon>
                <img src={GenreIcon[value.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {(isFetching) ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreorCategory(id))} button>
                <ListItemIcon>
                  <img src={GenreIcon[name.toLowerCase()]} className={classes.genreImages} height={30} />
                </ListItemIcon>

                <ListItemText primary={name} />
              </ListItem>
            </Link>
          )))}
      </List>
    </>
  );
};

export default Sidebar;
