import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import routePaths from '../../../configuration/routePaths';

import './NavigationItems.scss';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link={routePaths.DASHBOARD} exact>Home</NavigationItem>
        { props.isAuthenticated
            ? <NavigationItem link={routePaths.FAVORITES}>Favorites</NavigationItem>
            : null}
    </ul>
);

export default navigationItems;
