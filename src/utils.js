export const validateLogin = login => /[a-zA-Z0-9]{3,}/.test(login);

export const validatePassword = (password) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
