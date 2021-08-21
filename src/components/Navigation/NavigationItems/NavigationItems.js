import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Home</NavigationItem>
        { props.isAuthenticated
            ? <NavigationItem link="/orders">Favorites</NavigationItem>
            : null}
    </ul>
);

export default navigationItems;
