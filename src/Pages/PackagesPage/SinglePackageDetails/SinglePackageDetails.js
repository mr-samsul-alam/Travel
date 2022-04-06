import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import { Box, padding } from '@mui/system';
import { Grid, Typography, Container } from '@mui/material';
import BookingPackage from '../BookingPackage/BookingPackage';

const SinglePackageDetails = () => {
    const [packages, setPackage] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch('/Package_Fake_Data.json')
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [])
    const clickedPackage = packages.filter(course => course?.index === parseFloat(id))
    console.log(parseFloat(clickedPackage[0]?.reviews_star));
    return (
        <div >
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${clickedPackage[0]?.main_picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: "center center",
                height: '400px',
                backgroundColor: 'rgba(35,111,151,0.7)',
                position: "relative"

            }}>
                <Container>
                    <Box style={{ position: "absolute", bottom: 0, padding: "30px" }} >
                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                            <Rating name="read-only" value={parseFloat(clickedPackage[0]?.reviews_star)} readOnly /><b style={{ color: 'white' }} >9k+ review</b>
                        </Box>
                        <Typography style={{ color: 'white' }} variant="h5" component="div" ><b style={{ fontSize: "2rem" }} >{clickedPackage[0]?.package_name}</b></Typography>
                        <Typography gutterBottom component="div">
                            <b><span style={{ color: "#1BBF72", fontSize: "2rem" }} >{clickedPackage[0]?.price}</span> <span style={{ color: 'white' }} >/Person</span></b>
                        </Typography>
                    </Box>
                </Container>
            </div>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <Typography gutterBottom component="div" variant='p' style={{ fontSize: "2.5rem", fontWeight: '700', paddingTop: '10px' }}  >
                            Overview
                        </Typography>
                        <Typography gutterBottom component="div" variant='p' style={{ fontSize: "1.3rem", fontWeight: '400' }}  >
                            {clickedPackage[0]?.overview}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookingPackage clickedPackage={clickedPackage}  ></BookingPackage>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default SinglePackageDetails;