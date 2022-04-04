import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import About4Home from '../../AboutPage/About4Home/About4Home';
import AboutPage from '../../AboutPage/AboutPage';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <About4Home></About4Home>
                <Typography>
                    <NavLink to="/about"><Button Nav variant='contained' >Explore More</Button></NavLink>
                </Typography>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Homepage;