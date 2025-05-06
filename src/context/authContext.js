import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Exemple : { name, role }

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
