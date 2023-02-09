import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const OpenHours: FC<BoxProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Box mb="1rem">
        <Heading fontSize="1.6rem" fontWeight="medium">
          OPENING HOURS
        </Heading>
      </Box>
      <Text mb={4}>Tue-Thu, Sun: 6pm - 12am</Text>
      <Text mb={4}>Fri-Sat: 6pm - 2am</Text>
      <Text>Cocktails with Breakfast Options ( 9am - 11:30am )</Text>
    </Box>
  );
};
