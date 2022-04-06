import React from 'react';
import LiveRouteComponent from '../Shared/LiveRouteComponent/LiveRouteComponent';
import Navigations from '../Shared/Navigations/Navigations';
import About4Home from './About4Home/About4Home';

const AboutPage = () => {
    return (
        <div>
            <Navigations></Navigations>
            <LiveRouteComponent></LiveRouteComponent>
            <About4Home></About4Home>
        </div>
    );
};

export default AboutPage;