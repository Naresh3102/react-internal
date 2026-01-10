import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isLogin = true;
  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
