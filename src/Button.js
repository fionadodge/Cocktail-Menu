import React from "react";
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Button.css';

function Button({message}){
    return (
        <button className ="button" type="button">Order</button>
    );
}

Button.propTypes = {
    message: PropTypes.string
}

export default Button;