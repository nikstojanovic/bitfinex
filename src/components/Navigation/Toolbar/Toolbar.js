import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <nav>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
        { !props.isAuth
            ? <Button className="NavigationItem" clicked={props.onLoginClick}>Login</Button>
            : null}
    </header>
);

export default toolbar;
