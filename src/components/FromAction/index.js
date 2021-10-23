import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FormAction = ({ text, ...restProps }) => (
    <div className="form__action">
        <button {...restProps}>{text}</button>
    </div>
);

FormAction.propTypes = {
    text: PropTypes.string.isRequired,
};

export default FormAction;
