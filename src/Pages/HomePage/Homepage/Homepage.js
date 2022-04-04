import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import About4Home from '../../AboutPage/About4Home/About4Home';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';

const Homepage = () => {
    return (
         <Box sx={{ mt: 9 }}>

            <Header></Header>
            <Container>
                <About4Home></About4Home>
                <Typography>
                    <NavLink style={{ textDecoration: 'none' }} to="/about"><Button variant='contained' >Explore More</Button></NavLink>
                </Typography>
            </Container>
            <Gallery></Gallery>
        </Box>
       
    );
};

export default Homepage;