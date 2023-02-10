import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Location: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Box mb="1rem">
        <Heading fontSize="1.6rem" fontWeight="medium">
          LOCATION
        </Heading>
      </Box>
      <Box w={{ base: "fit-content", md: "12rem" }}>
        <Text fontSize="1rem" letterSpacing="0.4px" lineHeight="1.6em">
          Rio Missouri 555, Valle de Santa Engracia, 66220 San Pedro Garza
          García, N.L.
        </Text>
      </Box>
    </Box>
  );
};
