import React from 'react';
import { Modal, Typography, Rating,Button, ButtonGroup, Grid, Box,CircularProgress, useMediaQuery } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import {Link,  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from 'axios';



const MovieInfo = () => {
  console.log('MovieInfo');

  const {id}=useParams();
  return (
    <div>
      Movie Information1
    </div>
  );
};

export default MovieInfo;
