import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { SectionContainer } from "../SectionContainer";
import { Location } from "./location";
import { Offers } from "./offers";
import { OpenHours } from "./openTime";
import { PitchText } from "./pitch";
import { TextsComp } from "./texts";

export const Pitcher: FC = () => {
  return (
    <SectionContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex flexDir="column" mb={12} mr={{ md: 16, lg: 0 }}>
          <PitchText mb={8} />
          <Offers />
        </Flex>
        <Flex flexDir="column" mr={{ md: 0, lg: 8 }}>
          <TextsComp
            Head="ALL ENQUIRIES"
            Textss="dylanokeks@yahoo.com"
            size="1.6"
            mb={12}
          />
          <TextsComp Head="PHONE" Textss="+52818022****" size="1.6" mb={12} />
          <OpenHours mb={12} />
          <Location mb={8} />
        </Flex>
      </Box>
    </SectionContainer>
  );
};
