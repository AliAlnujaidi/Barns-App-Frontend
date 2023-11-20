'use client';
import AuthContext from "@/context/AuthProvider";
import { useContext, useDebugValue } from "react";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
