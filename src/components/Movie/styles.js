import { Scale } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  // this one is for the movie that will be displayed in the grid
  movie: {
    padding: ' 10px',
  },
  links: {

    alignItems: 'center',
    textDecoration: 'none',

    fontWeight: 'bolder',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',

    },
  },
  // movie Posters CSS here
  image: {
    borderRadius: '10px',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  // Title stylinf done here 
  title: {
    // justifyItems: 'left',
    textAlign: 'left',
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    // elipsis is the three dots that appear when the text is too long
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0px',

  },
  // Rating styling done here
  Rating: {
    // display: 'flex',
    justifyContent: 'center',
  },


}));
