import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const PopularDestinationCard = (props) => {
    const { name, main_picture, index, content } = props.place
    const navigate = useNavigate();
    const handleCardDetails = (index) => {
        console.log("clicked");
        navigate(`/singleCoursesDetails/${index}`)
    }
    return (
        <Grid item xs={12} md={3} style={{ paddingTop: "30px" }}>
            <Card sx={{ maxWidth: "450px", height: "550px" }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={main_picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#1BBF72" }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button
                        onClick={() => handleCardDetails(index)}
                        style={{ margin: "auto" }}
                        size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default PopularDestinationCard;