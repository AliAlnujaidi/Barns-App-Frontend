"use client";

import BarnsCard from "@/components/BarnsCard";
import AuthContext from "@/context/AuthProvider";
import { Box, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";

export default function Barns() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <Box m={10}>
        <Flex>
          <Heading>Barns:</Heading>
          <Spacer />
          <Button mr={70} colorScheme="teal" variant="solid">
            Add barn
          </Button>
        </Flex>
        <Box m={15}>
          <BarnsCard />
        </Box>
      </Box>
    </>
  );
}
