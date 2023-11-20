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
import { useState } from "react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmitForm = () => {
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

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
    }
		if(password !== passwordConfirm){
			setPasswordError("The passwords do not match")
		}
		if("" === firstName){
			setFirstNameError("Please enter your first name")
		}
		if("" === lastName){
			setLastNameError("Please enter your last name")
		}

    // Authentication calls will be made here...
  };

  return (
    <>
      <ModalCloseButton />
      <Center>
        <Box padding={5} minH={350} width={400}>
          <Text fontSize={30}>
            <Center> Welcome to our App </Center>
          </Text>
          <Text fontSize={20}>
            <Center> Login to your account </Center>
          </Text>
          <Box m={"15px 0px"}>
            <Text>Email:</Text>

            <Input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <Text color={"red.500"}>{emailError}</Text>
          </Box>

          <Box>
            <Text>Password:</Text>

            <Input
              value={password}
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

          <Button onClick={onSubmitForm} mt={15} colorScheme="teal" size="md">
            Log in
          </Button>
        </Box>
      </Center>
    </>
  );
}
