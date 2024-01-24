import { makeStyles } from "@mui/material";

export default makeStyles(() => ({
    containerSpace:{
        display: 'flex',
        justifyContent: 'space-around',
        margin:'10px 0 !important',
        [theme.breakpoint.down('sm')]:{
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
    }
}));
