"use client";

import BarnsCard from "@/components/BarnsCard";
import { Box, Text, Heading } from "@chakra-ui/react";

export default function Barns() {
  return (
    <>
      <Box m={10}>
        <Heading>Barns:</Heading>
        <Box m={15}>
          <BarnsCard />
        </Box>
      </Box>
    </>
  );
}
