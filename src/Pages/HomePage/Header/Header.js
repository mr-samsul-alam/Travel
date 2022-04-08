import React, { useState } from 'react';
import { Box, Button, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {



    const theme = createTheme();
    return (
        <div className='mainComponent'>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={9}
                        sx={{
                            backgroundImage: 'url(https://templatekit.jegtheme.com/natour/wp-content/uploads/sites/99/2021/05/traveler-near-waterfall-1024x682.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
                        <Typography className='headerText'>
                            <Typography style={{ textAlign: "center", color: '#1675Ac', fontWeight: "bolder", fontSize: '4.5rem' }} component="div"  >
                                DISCOVER
                            </Typography>
                            <Typography style={{ textAlign: "center", color: '#FFA914', fontWeight: "bolder", fontSize: '3rem' }} component="div">
                                The World Together
                            </Typography>
                            <Link to="home" style={{ textDecoration: 'none', }} > <Button style={{ textAlign: "center", color: '#FFA914', marginLeft: '43%', padding: '15px', fontWeight: "bolder", fontSize: '1.2rem' }}
                                variant='outlined'>Explore</Button></Link>
                        </Typography>

                    </Grid>
                </Grid>
            </ThemeProvider>
        </div >

    );
};

export default Header; 