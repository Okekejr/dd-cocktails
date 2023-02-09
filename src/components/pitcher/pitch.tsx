import { Heading, Box, Text, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const PitchText: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Box w="xs">
        <Heading
          fontSize="2rem"
          fontWeight="bold"
          lineHeight="1.6em"
          mb={{ base: "2rem", md: "3rem" }}
        >
          Elegant Mixology and Craftmanship
        </Heading>
      </Box>
      <Box w={{ base: "20rem", md: "30rem" }}>
        <Text fontSize="1rem" letterSpacing="0.4px" lineHeight="1.6em">
          Step into a world of mixology magic and experience the art of craft
          cocktails like never before! Our bartenders are true wizards behind
          the bar, conjuring up masterpieces with every pour. From classic
          recipes to innovative creations, each drink is a symphony of flavors
          designed to tantalize your taste buds. Come savor the taste of
          sophistication and be transported to a realm where every sip is a
          journey. Let us mix, shake and stir your evening to perfection at
          Okeke & Robles.
        </Text>
      </Box>
    </Box>
  );
};
