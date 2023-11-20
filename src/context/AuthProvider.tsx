"use client";

import axios from "@/api/axios";
import useRefreshToken from "@/hooks/useRefreshToken";
import { createContext, useState, ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const refreshToken = useRefreshToken();
  const [auth, setAuth] = useState(' ');
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
