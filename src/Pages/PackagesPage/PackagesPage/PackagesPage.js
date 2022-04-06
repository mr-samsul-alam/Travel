import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import LiveRouteComponent from '../../Shared/LiveRouteComponent/LiveRouteComponent';
import PackageCard from '../PackageCard/PackageCard';

const PackagesPage = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('/Package_Fake_Data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []) 
    return (
        <div>
            <LiveRouteComponent></LiveRouteComponent>
            <Container style={{ paddingTop: "10px" }}>
                <h1 style={{ color: "#1BBF72" }}>Packages </h1>
                <Grid container spacing={2}>

                    {
                        packages.map(s_package => <PackageCard key={s_package.index} s_package={s_package} ></PackageCard>)
                    }
                </Grid>



            </Container>

        </div>
    );
};

export default PackagesPage;