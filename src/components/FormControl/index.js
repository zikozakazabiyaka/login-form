import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const FormControl = ({ label, message, invalid, ...restProps }) => (
    <div className="form__control">
        <label className="form__control-label">
            <span>{label}</span>
            <input
                className={
                    classNames('form__control-input', {
                        'is-invalid': invalid,
                    })}
                {...restProps}
            />
        </label>
        {message && invalid && <p className="form__control-message">{message}</p>}
    </div>
);

FormControl.propTypes = {
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
    invalid: PropTypes.bool,
};

FormControl.defaultProps = {
    message: '',
    invalid: false,
};

export default FormControl;
