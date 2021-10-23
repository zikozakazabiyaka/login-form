import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Form = ({ children, title, ...restProps }) => (
    <div className="form">
        {title && <h2 className="form__title">Login form</h2>}
        <form {...restProps}>{children}</form>
    </div>
);

Form.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

Form.defaultProps = {
    title: '',
};

export default Form;
