import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MenuData } from "../menu/menuData";
import { MenuGrid } from "../menu/menuGrid";
import { SectionContainer } from "../SectionContainer";

const MenuPage: FC = () => {
  return (
    <SectionContainer pt={0}>
      <Flex flexDirection="column" alignItems="center">
        <Heading
          fontSize="2rem"
          fontWeight="bold"
          lineHeight="1.6em"
          mb={{ base: "0.5rem", md: "1.5rem" }}
        >
          Our Popular Items
        </Heading>
        <Text as="p" textAlign="center" mb={{ base: 8, md: 12 }}>
          Try one of our most popular selections and see what everyone’s talking
          about!
        </Text>
        <MenuGrid data={MenuData} />
      </Flex>
    </SectionContainer>
  );
};

export default MenuPage;
