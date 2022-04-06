import React from 'react';
import Navigations from '../Shared/Navigations/Navigations';

const NotFound = () => {
    return (
        <div>
            <Navigations></Navigations>
            <h1 style={{ padding: '400px' }} >This is route isnot exist</h1>
        </div>
    );
};

export default NotFound;