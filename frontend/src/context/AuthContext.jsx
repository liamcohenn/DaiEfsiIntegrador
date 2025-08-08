import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

function decodeJwt(token) {
  try {
    const [, payload] = token.split('.');
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem('token');
    return t ? decodeJwt(t) : null; // { id, first_name, last_name, iat, exp }
  });

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(decodeJwt(newToken));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ token, user, login, logout }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
