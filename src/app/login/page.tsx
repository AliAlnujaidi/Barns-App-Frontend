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
} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Box m={10}>
        <Center>
          <Box m={10} padding={5} height={400} width={400} shadow={"dark-lg"} border={""}>
            <Text fontSize={30}>
              <Center> Welcome Back! </Center>
            </Text>
            <Text fontSize={20}>
              <Center> Login to your account </Center>
            </Text>

            <Text>Email:</Text>
            <Input></Input>
            <Text>Password:</Text>
            <Input></Input>
            <Button mt={20} colorScheme="teal" size="md">
              Login
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
}
