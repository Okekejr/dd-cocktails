import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <Box w="100%" display="flex" mt={{ base: "3rem", md: "4.5rem" }}>
      <Box w="100%" h="fit-content">
        <Image
          src="/assets/img/bar.png"
          w="100%"
          h="60vh"
          objectFit="cover"
          alt="bar image"
        />
      </Box>
    </Box>
  );
};
