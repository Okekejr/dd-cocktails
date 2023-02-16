import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { Footer } from "../footer";
import { SectionContainer } from "../SectionContainer";

const CareerPage: FC = () => {
  return (
    <Container maxW="container.xl" px="0">
      <SectionContainer>
        <Heading
          fontSize="2rem"
          fontWeight="bold"
          lineHeight="1.6em"
          mb={{ base: "2rem", md: "3rem" }}
        >
          JOIN OUR FAMILY!
        </Heading>
        <Box
          display="flex"
          flexDir={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          mt={{ md: 8 }}
        >
          <Flex
            flexDir="column"
            w={{ base: "20rem", md: "23rem", lg: "40rem" }}
            mr={{ md: 16, lg: 0 }}
          >
            <Text fontSize="1.5rem" lineHeight="1.6em" mb={{ base: 4, md: 8 }}>
              OUR PURPOSE IS:
            </Text>
            <UnorderedList>
              <ListItem>
                Show appreciation and gratitude for each other.
              </ListItem>
              <ListItem>Embrace and celebrate diversity.</ListItem>
              <ListItem>
                Support individual and collective growth and development.
              </ListItem>
            </UnorderedList>
            <Text mt={{ base: 4, md: 12 }}>
              We are always looking for bright, friendly people to join our
              team! If you love making sure everyone around you is having a
              great time, and want to progress your career with a world-class
              bar,
            </Text>
          </Flex>
          <Flex flexDir="column" mb={{ base: 8, md: 0 }}>
            <Box w="100%" h={{ base: "30vh", md: "40vh" }} display="flex">
              <Image
                src="/assets/img/team.jpg"
                style={{ width: "100%", objectFit: "cover" }}
                width={100}
                height={60}
                alt="team image"
              />
            </Box>
          </Flex>
        </Box>
      </SectionContainer>
      <Footer pt={4} />
    </Container>
  );
};

export default CareerPage;
