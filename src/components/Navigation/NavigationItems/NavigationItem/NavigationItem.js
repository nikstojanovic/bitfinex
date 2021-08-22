import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({link, exact, children}) => (
    <li className="NavigationItem">
        <NavLink
            to={link}
            exact={exact}
            activeClassName="active"
        >
            {children}
        </NavLink>
    </li>
);

NavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

NavigationItem.defaultProps = {
    exact: false,
};

export default NavigationItem;
