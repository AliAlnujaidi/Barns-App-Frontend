"use client";

import BarnsCard from "@/components/BarnsCard";
import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Spacer,
  Center,
  Input,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthProvider";
import axios from "@/api/axios";

export default function LoginForm() {
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmitForm = async () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
    }

    if (password.length < 1) {
      setPasswordError("The password must be 8 characters or longer");
    }

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      const access_token = response.data.access_token;
      const role = response.data.user.role;
      setAuth( access_token );
      setSuccess(true);
    } catch (error) {

      setWrongCredentials(true);
    }
  };

  return (
    <>
      <ModalCloseButton />
      <Center>
        {success ? (
          <Box
            bg="green.500"
            color="white"
            p={3}
            borderRadius="md"
            width={400}
            m={10}
          >
            <Text>Success! You have been logged in.</Text>
          </Box>
        ) : (
          <>
            <Box padding={5} minH={350} width={400}>
              <Text fontSize={30}>
                <Center> Welcome Back! </Center>
              </Text>
              <Text fontSize={20}>
                <Center> Login to your account </Center>
              </Text>
              <Box m={"15px 0px"}>
                <Text>Email:</Text>

                <Input
                type="email"
                  placeholder="Enter your email here"
                  onChange={(ev) => setEmail(ev.target.value.toLowerCase())}
                />
                <Text color={"red.500"}>{emailError}</Text>
              </Box>

              <Box>
                <Text>Password:</Text>

                <Input
                type="password"
                  placeholder="Enter your password here"
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <Text color={"red.500"}>{passwordError}</Text>
              </Box>

              <Box m={"15px 0px"}>
                {
                  // TODO: add forgot password functionality
                }
                <Text href={"#"} as={"a"} opacity={0.5}>
                  Forgot Password?
                </Text>
              </Box>

              {wrongCredentials && (
                <Text color={"red.500"}>Wrong email or password.</Text>
              )}

              <Button
                onClick={onSubmitForm}
                mt={15}
                colorScheme="teal"
                size="md"
              >
                Log in
              </Button>
            </Box>
          </>
        )}
      </Center>
    </>
  );
}
