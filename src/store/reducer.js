import {
    SET_LOGIN_VALUE,
    SET_PASSWORD_VALUE,
    SET_LOGIN_INVALID,
    SET_PASSWORD_INVALID,
    CLEAR_FORM,
} from './constants';

const initialState = {
    login: {
        value: '',
        invalid: false,
    },
    password: {
        value: '',
        invalid: false,
    },
};

const reducer = (store = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN_VALUE:
            return { ...store, login: { ...store.login, value: action.payload }}
        case SET_PASSWORD_VALUE:
            return { ...store, password: { ...store.password, value: action.payload }}
        case SET_LOGIN_INVALID:
            return { ...store, login: { ...store.login, invalid: action.payload }}
        case SET_PASSWORD_INVALID:
            return { ...store, password: { ...store.password, invalid: action.payload }}
        case CLEAR_FORM:
            return initialState
        default:
            return store;
    }
};

export default reducer;
