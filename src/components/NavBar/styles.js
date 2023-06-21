import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  toolbar: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]:{
        marginLeft: '0px',
        flexWrap: 'wrap',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        display: 'none',
    }
  },
}));