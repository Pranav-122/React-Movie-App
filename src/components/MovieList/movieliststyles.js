/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
    moviesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
        overflow: 'scroll',
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari, and Opera
        },
    },
}));