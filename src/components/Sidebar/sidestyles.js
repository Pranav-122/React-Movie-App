import { makeStyles } from "@mui/styles";

// eslint-disable-next-line no-unused-vars
const drawerWidth = 240;

export default makeStyles((theme) => ({
    imageLink:{
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0'
    },
    image: {
        width: '70%'
    },
    links:{
        color: theme.palette.text.primary,
        textDecoration: 'none'
    },
    genreImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)'
    }
   
    
}));