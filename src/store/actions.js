import {
    SET_LOGIN_VALUE,
    SET_PASSWORD_VALUE,
    SET_LOGIN_INVALID,
    SET_PASSWORD_INVALID,
    CLEAR_FORM,
} from './constants';

export const setLoginValue = payload => ({ type: SET_LOGIN_VALUE, payload });
export const setPasswordValue = payload => ({ type: SET_PASSWORD_VALUE, payload });
export const setLoginInvalid = payload => ({ type: SET_LOGIN_INVALID, payload });
export const setPasswordInvalid = payload => ({ type: SET_PASSWORD_INVALID, payload });
export const clearForm = () => ({ type: CLEAR_FORM });
