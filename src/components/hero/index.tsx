import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <Box w="100%" display="flex" mt={{ base: "3rem", md: "4.5rem" }}>
      <Box w="100%" h="fit-content">
        <Image
          src="/assets/img/bar.jpg"
          style={{ width: "100%", height: "60vh", objectFit: "cover" }}
          width={100}
          height={60}
          alt="bar image"
        />
      </Box>
    </Box>
  );
};
