import React from 'react';
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

export default Navbar;
