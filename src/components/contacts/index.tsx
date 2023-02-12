import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { TextsComp } from "../pitcher/texts";
import { SectionContainer } from "../SectionContainer";

export const Contacts: FC = () => {
  return (
    <Box
      w={{ base: "auto" }}
      h="70vh"
      display="flex"
      backgroundImage="/assets/img/drink.jpg"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <SectionContainer>
        <Flex flexDirection="column" w={{ base: "fit-content", md: "20rem" }}>
          <Heading
            fontSize="2rem"
            fontWeight="bold"
            lineHeight="1.6em"
            mb={{ base: "2rem", md: "3rem" }}
            color="#FBD38D"
          >
            Contact us
          </Heading>
          <TextsComp
            Head="PRIVATE EVENTS / MARKETING / PARTNERSHIPS"
            Textss="dylanokeks@yahoo.com"
            size="1.3"
            col="#fff"
            mb={12}
          />
          <TextsComp
            Head="RESERVATIONS"
            Textss="Reserve through our email above"
            size="1.3"
            col="#fff"
          />
        </Flex>
      </SectionContainer>
    </Box>
  );
};
