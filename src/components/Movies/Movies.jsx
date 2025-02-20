/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import FeaturedMovie from './../FeaturedMovie/FeaturedMovie';
import MovieList from './../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);

    const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress size="4rem" />
            </Box>
        );
    }

    if (!data?.results?.length) {
        return (
            <Box display="flex" alignItems="center" mt="20px">
                <Typography variant="h4">
                    No Movies That Match the Name <br />
                    Please Search for Something Else
                </Typography>
            </Box>
        );
    }

    if (error) return 'An Error Has Occurred.';

    return (
        <div>
            <FeaturedMovie movie={data.results[0]} />
            <MovieList movies={data.results} />
            <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
        </div>
    );
};

export default Movies;
