import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;

