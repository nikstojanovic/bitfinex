import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';
import routePaths from '../../../configuration/routePaths';

import './NavigationItems.scss';

const NavigationItems = ({isAuthenticated}) => (
    <ul className="NavigationItems">
        <NavigationItem link={routePaths.DASHBOARD} exact>Home</NavigationItem>
        {isAuthenticated
            ? <NavigationItem link={routePaths.FAVORITES}>Favorites</NavigationItem>
            : null
        }
    </ul>
);

NavigationItems.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default NavigationItems;
