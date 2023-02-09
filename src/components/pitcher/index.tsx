import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { SectionContainer } from "../SectionContainer";
import { Enquiery } from "./enquiery";
import { Location } from "./location";
import { Offers } from "./offers";
import { OpenHours } from "./openTime";
import { Phone } from "./phone";
import { PitchText } from "./pitch";

export const Pitcher: FC = () => {
  return (
    <SectionContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex flexDir="column">
          <PitchText mb={8} />
          <Offers />
        </Flex>
        <Flex flexDir="column" mr={8}>
          <Enquiery mb={12} />
          <Phone mb={12} />
          <OpenHours mb={12} />
          <Location />
        </Flex>
      </Box>
    </SectionContainer>
  );
};