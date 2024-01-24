import React from 'react';
import { Modal, Typography, Rating,Button, ButtonGroup, Grid, Box,CircularProgress, useMediaQuery } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import {Link,  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';


const MovieInfo = () => {

  const {id}=useParams();
  const {data, isFetching,error}=useGetMovieQuery(id);
console.log(data);
  if(isFetching) {
    return(
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />

        
      </Box>
    );
  }
  if(error)
  {
    return(
      <Box>
        <Link  to="/">Something has gone wrong</Link>
      </Box>
    );
  }
  return (
    <Grid container className={ClassNames.containerSpace}>
  Test
    </Grid>
  );

  return (
    <div>
      Movie Information1
    </div>
  );
};

export default MovieInfo;
