import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const Backdrop = ({show, clicked}) => (
    show ? <div className="Backdrop" onClick={clicked}></div> : null
);

Backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func.isRequired,
};

Backdrop.defaultProps = {
    show: false,
};

export default Backdrop;
