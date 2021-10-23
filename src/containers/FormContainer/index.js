import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, FormControl, FormAction } from '../../components';
import * as actions from '../../store/actions';
import { validateLogin, validatePassword } from '../../utils';

const mapStateToProps = ({ login, password }) => ({
    login,
    password,
});

const mapDispatchToProps = {
    setLoginValue: actions.setLoginValue,
    setPasswordValue: actions.setPasswordValue,
    setLoginInvalid: actions.setLoginInvalid,
    setPasswordInvalid: actions.setPasswordInvalid,
    clearForm: actions.clearForm,
};

const FormContainer = ({
    login,
    password,
    setLoginValue,
    setPasswordValue,
    setLoginInvalid,
    setPasswordInvalid,
    clearForm,
}) => {
    const handleChangeLogin = ({ target: { value}}) => {
        setLoginValue(value);
    };

    const handleChangePassword = ({ target: { value}}) => {
        setPasswordValue(value);
    };

    const handleSubmit = event => {
        const loginIsValid = validateLogin(login.value);
        const passwordIsValid = validatePassword(password.value);
        
        console.log('ngchgcn');
        if (loginIsValid && passwordIsValid) {
            clearForm();
        } else {
            event.preventDefault();

            !loginIsValid ? setLoginInvalid(true) : setLoginInvalid(false);
            !passwordIsValid ? setPasswordInvalid(true) : setPasswordInvalid(false);
        }
    };

    return (
        <Form
            title="Login form"
            onSubmit={handleSubmit}
        >
            <FormControl
                label="Login"
                value={login.value}
                onChange={handleChangeLogin}
                message="Must contains min 3 symbols, letters and digits"
                type="text"
                invalid={login.invalid}
            />
            <FormControl
                label="Password"
                value={password.value}
                onChange={handleChangePassword}
                message="Must contains min 8 symbols, atleast 1 uppercase letter, 1 digit"
                type="password"
                invalid={password.invalid}
            />
            <FormAction text="Login" />
      </Form>
    );
};

FormContainer.propTypes = {
    login: PropTypes.shape({
        value: PropTypes.string,
        invalid: PropTypes.bool,
    }).isRequired,
    password: PropTypes.shape({
        value: PropTypes.string,
        invalid: PropTypes.bool,
    }).isRequired,
    setLoginValue: PropTypes.func.isRequired,
    setPasswordValue: PropTypes.func.isRequired,
    setLoginInvalid: PropTypes.func.isRequired,
    setPasswordInvalid: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
