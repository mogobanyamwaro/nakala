import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [alert, myAlert] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const setAlert = (msg, alertType, timeout = 5000) => {
    const id = uuid();

    myAlert([
      {
        msg,
        alertType,
        id,
      },
    ]);

    setTimeout(() => console.log('heelo'), 5000);
  };

  const login = async (email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      setLoading(true);
      const res = await axios.post(`/api/token/`, body, config);
      if (res) {
        setIsAuthenticated(true);
        localStorage.setItem('token', res.data);
        setLoading(false);
      }
      setLoading(false);

      setAlert('Authenticated successfully', 'success');
    } catch (err) {
      setLoading(false);
      setIsAuthenticated(false);
      localStorage.removeItem('token');

      setAlert('Error Authenticating', 'error');
    }
  };
  const signup = async ({ name, email, password, password2 }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password, password2 });

    try {
      setLoading(true);
      await axios.post(`/api/registration/signup`, body, config);

      setLoading(false);

      setAlert('go to your email to login', 'success');
    } catch (err) {
      setLoading(false);
      console.log(err);

      setAlert('Error Authenticating', 'error');
    }
  };
  const logout = () => {
    setAlert('logout successful.', 'success');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider
      value={{
        login,
        logout,
        setAlert,
        signup,
        alert,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
