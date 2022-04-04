import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'; 


const About4Home = () => {
    return (
        <Container style={{ marginTop: '50px' }}>
            <Grid container  >
                <Grid item xs={12} md={4}  >
                    <h4>
                        <span style={{ backgroundColor: '#FFA913', padding: '10px' }}> About Us</span>
                    </h4>
                    <Typography style={{ fontSize: '2rem' }}>
                        Explore more about our travel agency
                    </Typography>
                    <Typography style={{ textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.

                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    </Typography> 
                </Grid>
                <Grid item xs={12} md={4} >
                    <img style={{ marginLeft: '50px' }} src="http://ingenioushubs.com/Travel/demo/images/about-image-1.jpg" alt="" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ marginTop: '50px', marginRight: '50px' }} src="http://ingenioushubs.com/Travel/demo/images/about-image-2.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default About4Home;