/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './Pagistyles';
const Pagination = ({ currentPage, setPage, totalPages }) => {
    const classes = useStyles(); // Correct use of useStyles

    const handlePrev = () => {
        if (currentPage > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    if (totalPages === 0) return null; // Handle no pages case

    return (
        <div className={classes.container}> {/* Correct className usage */}
            <Button
                onClick={handlePrev}
                className={classes.button} // Correct className usage
                variant='contained'
                color="primary"
                type='button'
            >
                Prev
            </Button>

            <Typography variant="h4" className={classes.pageNumber}> 
                {currentPage} 
            </Typography>

            <Button
                onClick={handleNext}
                className={classes.button} // Correct className usage
                variant='contained'
                color="primary"
                type='button' >
                Next
            </Button>
        </div>
    );
};

export default Pagination;