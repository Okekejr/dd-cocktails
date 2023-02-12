import { Container, ContainerProps, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Copyright } from "./Copyright";
import { Disclaimer } from "./Disclaimer";
import { FooterLinks } from "./FooterLinks";

export const Footer: FC<ContainerProps> = (props) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      maxW="container.xl"
      w="100%"
      position="relative"
      px={{ base: 4, md: 7, lg: 24 }}
      pt={{ base: 4, md: 16 }}
      zIndex={10}
      {...props}
    >
      <Disclaimer mt={{ base: 12, md: 8 }} />
      <Flex mt={10} pt={10} pb={10} borderTop="1px solid" borderColor="#FBD38D">
        <Flex
          w="100%"
          marginTop={["1.5rem", "0"]}
          justifyContent="space-between"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Copyright fontSize="1rem" mt={{ base: 8, md: 0 }} />
          <FooterLinks />
          <Text w="fit-content">dylanokeks@yahoo.com</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
