import { Button, Container, Typography } from '@mui/material';
import { color } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const LiveRouteComponent = () => {
    const location = useLocation();
    const [webPageName, SetWebPageName] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        const wePageName = (location) => {
            if (location?.pathname === '/about') {
                SetWebPageName('About Us')
            }
            if (location?.pathname === '/packages') {
                SetWebPageName('Our Best Package')
            }
        }
        wePageName(location)
    }, [location])
    console.log(webPageName);

    const goOnPath = () => {
        navigate('/')
    }
    return (
        <div style={{
            backgroundImage: 'linear-gradient(rgba(35, 111, 151, 0.7), rgba(0, 0, 0, 0.6)), url(http://ingenioushubs.com/Travel/demo/images/breadcram-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            backgroundColor: 'rgba(35,111,151,0.7)'
        }}>
            <Typography style={{ textAlign: 'center', color: "white", }}>
                <Typography style={{ fontSize: "3rem" }} >{webPageName}</Typography>
                <Button style={{ color: 'white', fontSize: "1.5rem", }} onClick={goOnPath}>home</Button>
                <Button style={{ color: 'white', fontSize: "1.5rem", }}>{location?.pathname}</Button></Typography>


        </div>
    );
};

export default LiveRouteComponent;