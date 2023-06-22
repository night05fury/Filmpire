import { Scale } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  // this one is for the movie that will be displayed in the grid
  movie: {
    padding: ' 10px',
  },
  links: {

    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',

    },
  },
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

  title: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    // elipsis is the three dots that appear when the text is too long

    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0px',

  },

}));
