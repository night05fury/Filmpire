import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesConatiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    // for smaller screens
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },

  },

}));
