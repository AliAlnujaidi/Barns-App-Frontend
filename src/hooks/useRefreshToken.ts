"use client";
import axios from "@/api/axios";
import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";

const useRefreshToken = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const refreshToken = async () => {
    const response = await axios.get("auth/refresh");
    const access_token = response.data.access_token;
    console.log("refreshToken");
    setAuth(access_token);
    return response.data.access_token;
  };
  return refreshToken;
};

export default useRefreshToken;
