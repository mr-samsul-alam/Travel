import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PopularDestinationCard from '../../PopularDestination/PopularDestinationCard/PopularDestinationCard';

const PopularDestination = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('/Famous_destination.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    console.log(places);
    return (
        <div>
            <Container style={{ paddingTop: "10px" }}>
                <h1 style={{ color: "#1BBF72" }}>Popular Destination </h1>
                <Grid container spacing={2}>

                    {
                        places.map(place => <PopularDestinationCard key={place._id} place={place} ></PopularDestinationCard>)
                    }
                </Grid>



            </Container>
        </div>
    );
};

export default PopularDestination;