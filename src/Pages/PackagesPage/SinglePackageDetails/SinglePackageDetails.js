import React, { useEffect, useState } from 'react';
import Navigations from '../../Shared/Navigations/Navigations';
import BookingPackage from './BookingPackage/BookingPackage';
import PackageDetails from './PackageDetails/PackageDetails';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { Grid, Typography, Container } from '@mui/material';
const SinglePackageDetails = () => {
    const [selectedPackage, setPackage] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [id])
    return (
        <>
            <Navigations></Navigations>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${selectedPackage.main_picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: "center center",
                height: '400px',
                backgroundColor: 'rgba(35,111,151,0.7)',
                position: "relative"

            }}>
                <Box style={{ position: "absolute", bottom: 0, padding: "30px" }} >
                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                        <Rating name="read-only" value={parseFloat(selectedPackage.reviews_star)} readOnly /><b style={{ color: 'white' }} >9k+ review</b>
                    </Box>
                    <Typography style={{ color: 'white' }} variant="h5" component="div" ><b style={{ fontSize: "2rem" }} >{selectedPackage.package_name}</b></Typography>
                    <Typography gutterBottom component="div">
                        <b><span style={{ color: "#1BBF72", fontSize: "2rem" }} >{selectedPackage.price}</span> <span style={{ color: 'white' }} >/Person</span></b>
                    </Typography>
                </Box>
            </div>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <PackageDetails selectedPackage={selectedPackage} ></PackageDetails>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookingPackage Id={id} ></BookingPackage>
                    </Grid>
                </Grid>
            </Container>
        </>

    );
};

export default SinglePackageDetails;