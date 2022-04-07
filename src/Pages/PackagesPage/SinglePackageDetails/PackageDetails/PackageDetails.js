import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const PackageDetails = ({ selectedPackage }) => {


    return (
        <div >
            <Container>
                <Grid container spacing={1}>
                    <Typography>{selectedPackage?.overview}</Typography>
                </Grid>
            </Container>
        </div>
    );
};

export default PackageDetails;