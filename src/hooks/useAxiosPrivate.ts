"use client";
import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refreshToken = useRefreshToken();

  useEffect(() => {
    
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status > 399 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshToken();
          prevRequest.headers["access_token"] = `${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [ refreshToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
