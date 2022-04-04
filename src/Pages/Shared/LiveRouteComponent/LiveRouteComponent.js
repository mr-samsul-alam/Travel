import { Button, Container } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LiveRouteComponent = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div style={{
            backgroundImage: 'url(http://ingenioushubs.com/Travel/demo/images/breadcram-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <NavLink to='/home' >home</NavLink>
            <h1 >{location?.pathname}</h1> 


        </div>
    );
};

export default LiveRouteComponent;