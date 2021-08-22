import React from 'react';

import './Button.scss';

const Button = ({disabled, btnType, clicked, children}) => (
    <button
        disabled={disabled}
        className={`Button ${btnType}`}
        onClick={clicked}
    >
        {children}
    </button>
);

export default Button;

