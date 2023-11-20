"use client";

import AuthContext from "@/context/AuthProvider";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { Button } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import useSWR from "swr";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useContext(AuthContext);

  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      {users ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default UserTable;
