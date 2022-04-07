import React from 'react';
import { Box, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import './Header.css'
const Header = () => {
    const theme = createTheme();
    return (
        <div className='bogBoss'>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://templatekit.jegtheme.com/natour/wp-content/uploads/sites/99/2021/05/traveler-near-waterfall-1024x682.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Typography style={{ color: '#FFA914', fontSize: '4rem' }} component="div"  >
                            DISCOVER
                        </Typography>
                        <Typography style={{ color: '#1675Ac', fontSize: '2rem' }} component="div">
                            The World Together
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Box className='boxSir'>
                <h1 style={{ border: "1px solid red" }}>Helloe</h1>
            </Box>
        </div >

    );
};

export default Header; 