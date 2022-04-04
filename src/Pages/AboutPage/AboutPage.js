import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigations from '../../Pages/Shared/Navigations/Navigations';
import Footer from '../Shared/Footer/Footer';
import LiveRouteComponent from '../Shared/LiveRouteComponent/LiveRouteComponent';
import About4Home from './About4Home/About4Home';

const AboutPage = () => {
    return (
        <div> 
            <LiveRouteComponent></LiveRouteComponent>
            <About4Home></About4Home> 
        </div>
    );
};

export default AboutPage;