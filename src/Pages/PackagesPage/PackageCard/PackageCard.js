import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Box, padding } from '@mui/system';


const PackageCard = (props) => {
    const { _id,index, package_name, main_picture, price, description, day, hotel, reviews_star } = props.s_package
    const navigate = useNavigate();
    const handleCardDetails = (_id) => {
        console.log("clicked");
        navigate(`/singlePackageDetails/${_id}`)
    } 
    return (
        <Grid item xs={12} md={4} style={{ paddingTop: "30px" }}>
            <Card sx={{ maxWidth: "450px", }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="400"
                    image={main_picture}
                />
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                        <Rating name="read-only" value={reviews_star} readOnly /><b>9k+ review</b>
                    </Box>
                    <Typography variant="h5" component="div" sx={{ display: "flex", justifyContent: "space-between", padding: "7px", alignItems: 'center' }} >
                        <b><span style={{ color: "#1BBF72", fontSize: "2rem" }} >{package_name}</span> </b>
                        <b> <span><Button variant="outlined"
                            onClick={() => handleCardDetails(_id)}
                            size="small">Add To Wish</Button></span></b>
                    </Typography>
                    <Typography component="div">
                        <b><span style={{ color: "#1BBF72", fontSize: "2rem" }} >{price}</span> <span>/Person</span></b>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ display: "flex", justifyContent: "space-between", backgroundColor: '#E8E8E8', borderRadius: "10px", padding: "7px" }}>
                        <span style={{ paddingLeft: "17px" }} >{day} Days</span>| <span style={{ paddingRight: "17px" }}> {hotel.location}</span>
                    </Typography>
                    <Typography style={{ padding: "1px" }}>
                        <span>{description.split(',')}....</span>
                    </Typography>
                </CardContent>
                <CardActions style={{ paddingBottom: "20px" }} >
                    <Button variant="outlined"
                        onClick={() => handleCardDetails(_id)}
                        style={{ margin: "auto", padding: "8px" }}>See More</Button>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default PackageCard;