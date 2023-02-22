import {
  Box,
  Button,
  Container,
  ContainerProps,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Footer } from "../footer";
import { MenuD } from "../menu/menuData";
import { MenuGrid } from "../menu/menuGrid";
import { SectionContainer } from "../SectionContainer";

interface Props extends ContainerProps {
  data: MenuD;
}

const MenuPage: FC<Props> = ({ data, ...rest }) => {
  const list = Object.values(data);
  const [help, setHelp] = useState(2);

  const reduce = list.filter((item, i) => {
    if (i <= help) {
      return item;
    }
    return false;
  });

  const clickHandler = () => setHelp(help + 3);

  return (
    <Container maxW="container.xl" px="0" {...rest}>
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
            Try one of our most popular selections and see what everyone’s
            talking about!
          </Text>
          <MenuGrid data={reduce} />
          <Box mt={{ base: 4, md: 12 }}>
            {help <= reduce.length ? (
              <Button
                _hover={{ bgColor: "#FBD38D", color: "#000" }}
                onClick={clickHandler}
              >
                Load more
              </Button>
            ) : (
              <Divider
                mt={8}
                width={{ base: "10rem", md: "20rem" }}
                orientation="horizontal"
              />
            )}
          </Box>
        </Flex>
      </SectionContainer>
      <Footer pt={4} />
    </Container>
  );
};

export default MenuPage;
