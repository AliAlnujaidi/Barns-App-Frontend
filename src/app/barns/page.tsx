"use client";

import BarnsCard from "@/components/BarnsCard";
import { Box, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react";

export default function Barns() {
  return (
    <>
      <Box m={10}>
        <Flex>
          <Heading>Barns:</Heading>
          <Spacer/>
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
