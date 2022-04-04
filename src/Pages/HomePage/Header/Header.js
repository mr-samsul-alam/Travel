import { CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigations from '../../Shared/Navigations/Navigations';

const Header = () => {
    const theme = createTheme();
    return (
        <>
            <Navigations></Navigations>
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
                        <Typography style={{ color: '#FFA914', fontSize: '4rem' }} component="div" gutterBottom>
                            DISCOVER
                        </Typography>
                        <Typography style={{ color: '#1675Ac', fontSize: '2rem' }} component="div">
                            The World Together
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>

    );
};

export default Header;


{/* 
        // <div>
        //     <Navigations></Navigations>
        //     <Grid container spacing={1} style={{ height: '500px', marginTop: '50px' }}>
        //         <Grid
        //             item
        //             xs={false}
        //             sm={4}
        //             md={7}
        //             sx={{
        //                 backgroundImage: 'url(https://templatekit.jegtheme.com/natour/wp-content/uploads/sites/99/2021/05/traveler-near-waterfall-1024x682.jpg)',
        //                 backgroundRepeat: 'no-repeat',
        //                 backgroundColor: (t) =>
        //                     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        //                 backgroundSize: 'cover',
        //                 backgroundPosition: 'center',
        //             }}
        //         />
        //         <Grid item xs={12} sm={8} md={5}  >
        //             <Typography style={{ color: '#FFA914', fontSize: '4rem' }} component="div" gutterBottom>
        //                 DISCOVER
        //             </Typography>
        //             <Typography style={{ color: '#1675Ac', fontSize: '2rem' }} component="div">
        //                 The World Together
        //             </Typography>


        //         </Grid>
        //     </Grid>
        // </div> */}