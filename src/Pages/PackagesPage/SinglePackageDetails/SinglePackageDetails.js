import React, { useEffect, useState } from 'react';
import Navigations from '../../Shared/Navigations/Navigations';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { Grid, Typography, Container, Button, TextField, Alert } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth';

const SinglePackageDetails = () => {
    const [selectedPackage, setPackage] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const { user } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const hello = async () => {
            await fetch(`http://localhost:5000/products/${id}`)
                .then(res => res.json())
                .then(data => setPackage(data))
        }
        hello()
    }, [id])

    const initialInfo = { Name: user.displayName, email: user.email, phone: '' }
    const [bookingInformation, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInformation };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = (e) => {
        const bookingInfo = { ...bookingInformation, packageName: selectedPackage.package_name, packageImg: selectedPackage.main_picture, price: selectedPackage.price, status: "padding" }
        console.log(bookingInfo);
        fetch('http://localhost:5000/bookingInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            });
        console.log();
        e.preventDefault();
    }
    const goToCart = () => {
        navigate("/dashboard/myPlans")
    }

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
                        <Typography>{selectedPackage?.overview}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="Name"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                defaultValue="Phone Number"
                                size="small"
                            />

                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                        {bookingSuccess && <Alert severity="success">Your Order Added successfully!</Alert>}
                        {bookingSuccess && <Button onClick={goToCart} type="submit" variant="contained">My Cart</Button>}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SinglePackageDetails;