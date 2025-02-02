// Function to set the token in local storage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Function to get the token from local storage
export const getToken = () => {
  return localStorage.getItem('token');
};

export const setEmail = (email) => {
    localStorage.setItem('caEmail', email);
};

export const getEmail = () => {
    return localStorage.getItem('caEmail');
};