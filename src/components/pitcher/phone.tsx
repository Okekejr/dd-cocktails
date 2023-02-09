import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Phone: FC<BoxProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Box mb="1rem">
        <Heading fontSize="1.6rem" fontWeight="medium">
          PHONE
        </Heading>
      </Box>
      <Text>+52818022****</Text>
    </Box>
  );
};
