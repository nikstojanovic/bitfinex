import React from 'react';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

import './Navbar.scss';

const Navbar = ({isAuth, onLoginClick}) => (
    <header className="Navbar">
        <nav>
            <NavigationItems isAuthenticated={isAuth}/>
        </nav>
        {!isAuth
            ? <Button className="NavigationItem" btnType="Primary" clicked={onLoginClick}>Login</Button>
            : null
        }
    </header>
);

Navbar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    onLoginClick: PropTypes.func.isRequired,
};

export default Navbar;
