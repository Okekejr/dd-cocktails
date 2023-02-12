import { Box, BoxProps, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Offers: FC<BoxProps> = (props) => {
  return (
    <Box display="flex" flexDir="column" {...props}>
      <Flex mb={{ base: "1rem", md: "1.5rem" }}>
        <Text>Cocktails with Breakfast Options ( 9am - 11:30am )</Text>
      </Flex>
      <Flex mb={{ base: "1rem", md: "1.5rem" }}>
        <Text>Mix your own drinks ( 8pm - 9:30pm )</Text>
      </Flex>
      <Flex>
        <Link href="/menu" isExternal={true}>
          <Text fontWeight="bold" fontStyle="italic" color="#FBD38D">
            Cocktail Menu
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
