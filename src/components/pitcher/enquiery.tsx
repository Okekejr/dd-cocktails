import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Enquiery: FC<BoxProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Box mb="1rem">
        <Heading fontSize="1.6rem" fontWeight="medium">
          ALL ENQUIRIES
        </Heading>
      </Box>
      <Text>dylanokeks@yahoo.com</Text>
    </Box>
  );
};
