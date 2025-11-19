import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;