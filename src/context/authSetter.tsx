"use client";

import { useContext, useState } from "react";
import AuthContext from "./AuthProvider";
import useRefreshToken from "@/hooks/useRefreshToken";

export default function SetAccessToken({ children }) {
  const { auth, setAuth } = useContext(AuthContext);
  const refreshToken = useRefreshToken();
  refreshToken();

  return <>{children}</>;
}
