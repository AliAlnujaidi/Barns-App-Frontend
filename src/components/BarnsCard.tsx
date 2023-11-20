'use clienr';
import axios from "@/api/axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Skeleton,
  Box,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
const fetcher = (url: any) => axios.get(url).then((res) => res.data);

interface IBarn {
  id: number;
  name: string;
  location?: string;
  phone: string;
  photos?: any;
  coaches?: any;
}
const initialBarns: IBarn[] = [
  {
    id: 23,
    name: "test",
    phone: "058855955",
  },
];

export default function BarnsCard() {
  const { data } = useSWR("/barns", fetcher);
  const [barns, setBarns] = useState(initialBarns);

  useEffect(() => {
    if (data) {
      setBarns(data);
    }
  }, [data]);

  return (
    <>
      <Flex>
        {data &&
          barns.map((barn) => {
            return (
              <Card
                _hover={{ filter: "brightness(0.93)", transition: "0.3s" }}
                key={barn.id}
                minW={300}
                minH={330}
                maxW={300}
                maxH={330}
                bg={"gray.100"}
                m={5}
              >
                <CardBody>
                  <Box boxSize="150px 300px">
                    <Image
                      sizes="800px"
                      src="data:image/jpeg;base64,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"
                    />
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{barn.name}</Heading>
                    <Text>Barns description</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      as={"a"}
                      href={`barn/${barn.id}`}
                      variant="solid"
                      colorScheme="teal"
                    >
                      book now
                    </Button>
                  </ButtonGroup>
                  <Spacer />
                  <Text color="teal" fontSize="2xl">
                    200SR
                  </Text>
                </CardFooter>
              </Card>
            );
          })}
      </Flex>
    </>
  );
}
