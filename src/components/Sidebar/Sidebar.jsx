/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Divider, List,ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';
import { Link } from 'react-router-dom';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useDispatch, useSelector } from 'react-redux';

const redLogo = 'https://i.ibb.co/ft4skBS/logored.png';
const blueLogo = 'https://i.ibb.co/5K6vdzx/logoblue.png';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' }
]

// eslint-disable-next-line no-unused-vars
const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' }
]

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles();
    const { data, isFetching } = useGetGenresQuery();
    // console.log(data);
    const dispatch = useDispatch();
    const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
    // console.log(genreIdOrCategoryName);

    useEffect(() => {
        setMobileOpen(false);
    },[genreIdOrCategoryName]);



    return (
        <>
          <Link to="/" className={classes.imageLink} >
          <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="EasyLogo" /> 
          </Link>

          <Divider/>

        <List>
            <ListSubheader>Categories </ListSubheader>
            
                 {categories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value)) } >
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItemButton>
                
                </Link>
            ) )}
       </List> 

        <Divider/>

        <List>
            <ListSubheader>Genres </ListSubheader>
            {isFetching ? (
                <Box display="flex" justifyContent='center'>
                    <CircularProgress/>
                </Box>
            ): 
            data.genres.map(({ name, id }) => (
                <Link key={name} className={classes.links} to="/">
                    <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))} >
                    {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                     <ListItemText primary={name} />
                     </ListItemButton> 
                
                </Link>
            ) )}
       </List>   

        </>
    );
};

export default Sidebar;