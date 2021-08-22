import React from 'react';
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

export default NavigationItem;
