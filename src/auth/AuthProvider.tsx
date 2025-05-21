import { createContext, useContext, useState } from "react";

const AuthContext = createContext('light');

export const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState(null);

  const login = (userData:any) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Persist login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
