import React, { useState } from 'react';
import { Modal, Typography, Rating, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack, Celebration, Add, ArrowRight, ArrowLeft } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from 'axios';
import { useGetMovieQuery,useGetRecommendationQuery } from '../../services/TMDB';
import useStyles from './styles';
import GenreIcon from '../../assets/genres';
import { selectGenreorCategory } from '../../features/currentGenreorCategory';
import {MovieList}from '..';


const MovieInfo = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch(); // to send an action to the store
  const { data, isFetching, error } = useGetMovieQuery(id);
  const {data:recommendation,isFetching:isRecommendationsFetching} = useGetRecommendationQuery({list:'/recommendations',movie_id:id});  // using the hook here for passing the list and movie id
  const isMovieFavorited = true;
  const isMovieWatchlisted = true;
  const [open,setOpen] = useState(false); 
  const addToFavorites=() => {
// to be filled in later
};
const addToWatchlist=() => {
// to be filled in later
};

// *** Console Log here for debugging ***
  console.log(data);
  console.log(recommendation);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />


      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Link to="/">Something has gone wrong</Link>
      </Box>
    );
  }
  return ( 
    // movier poster
    <Grid container className={classes.containerSpace}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.moviePoster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      {/* Overview and Tagline of the movie */}
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align='center' gutterBottom>
          {data?.title} ({data.release_date.split()})
        </Typography>
        <Typography variant="h5" align='center' gutterBottom>
          {data?.tagline}
        </Typography>
        {/* Ratings */}
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align='center'>
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant='subtitle1' align='center' gutterBottom style={{ marginLeft: '1em' }}>
              {data?.vote_average}/10
            </Typography>
            {/* Displaying Runtime of the movie here */}
            <Typography variant='h6' align='center' gutterBottom style={{ marginLeft: '5em' }}>
              {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
            </Typography>
          </Box>
        </Grid>
        {/* Displaying genre images here */}
        <Grid item className={classes.genreContainer}>
          {data?.genres?.map((genre, i) => (
            <Link key={genre.name} className={classes.links} to="/" onClick={() => dispatch(selectGenreorCategory(genre.id))}>
              <img src={GenreIcon[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography variant='subtitle1' color='textPrimary'>
                {genre?.name}
              </Typography>
            </Link> // with the Links to the Genres
           ))}
        </Grid >
        {/* Displaying the overview and casts */}
        <Typography variant='h5' gutterBottom style={{marginTop: '10px'}}> 
          Overview  
        </Typography>
        <Typography style={{marginBottom:'2rem'}}>
          {data?.overview}
        </Typography>
        <Typography variant='h5' gutterBottom style={{}}>
          Top Casts
        </Typography>
        {/* Displaying the casts image and their names */}
        <Grid item container spacing={2}>
          {data && data?.credits?.cast?.map((characters,i)=>(
            characters.profile_path && 
            <Grid key={i}item xs={4} md={2} component={Link} to={`/actors/${characters.id}`} style={{textDecoration:'none'}}>
              <img className={classes.castImage} src={`https://image.tmdb.org/t/p/w500/${characters.profile_path}`}  alt={characters.name} />
              <Typography color='textPrimary'>
                {characters?.name}
              </Typography>
              <Typography color='textSecondary'>{characters.character.split('/')[0]}</Typography>
            </Grid>
          )).slice(0,8) } {/*Displaying the top casts only */}
        </Grid> 
        {/* Displaying the Buttons for Homepage of Movie ,IMDB, Addd to Favorites , and Add to watchlists */}
        <Grid item container style={{marginTop:'2rem'}}>
        {/* Div holding all the buttons together */}
          <div className={classes.buttonContainer}>
          <Grid item xs={12} sm={6} className={classes.buttonContainer}>
            <ButtonGroup size='medium' variant='outlined'>
              <Button target='_blank' rel='noopener noreferrer' href={data?.homepage} endIcon={<Language/>}>Website</Button>
              <Button target='_blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon/>}>IMDB</Button>
              <Button onClick={()=>setOpen(true)} endIcon={<Theaters/>}>Trailer</Button>
            </ButtonGroup>  
          </Grid>

          <Grid item xs={12} sm={6} className={classes.buttonContainer}>
            <ButtonGroup size='small' variant='outlined'>
              
              <Button onClick={()=>{addToFavorites}}  endIcon={isMovieFavorited? <FavoriteBorderOutlined/>:<Favorite/>}>
                {isMovieFavorited?'Unfavorite':'Favorite'}
              </Button>
              <Button onClick={()=>{addToWatchlist}}  endIcon={isMovieWatchlisted? <Remove/>:<PlusOne/>}>
                WATCHLIST
              </Button>
              <Button  endIcon={<ArrowBack/>} sx={{borderColor:'primary.main'}}>
                <Typography style={{textDecoration:'none'}} component={Link} to='/' color='inherit' variant='subtitle2'>BACK</Typography>
              </Button>
            </ButtonGroup>
          </Grid>
          </div>
        </Grid>
      </Grid >
      <Box marginTop='5rem' width='100%'>
            <Typography variant='h4' gutterBottom align='center'>
             You Might Also Like 
            </Typography>
            {/* Loop through the recommended movies */}
            {recommendation && recommendation
            ?<MovieList movies={recommendation}/>
            :<Box>Sorry, nothing was found</Box>}

      </Box>
      <Modal closeAfterTransition className={classes.modal} open={open} onClose={() => setOpen(false)}>
        {data?.videos?.results?.length>0 && (
          <iframe
            autoPlay
            className={classes.videos}
            style={{border: '0'}}         
            title='Trailer'
            src={`https://youtube.com/embed/${data.videos.results[0].key}`}
            allow='autoPlay'
          />
        )}
      </Modal>
    </Grid >
  );
};

export default MovieInfo;
