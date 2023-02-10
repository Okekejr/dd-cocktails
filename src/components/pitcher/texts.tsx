import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends BoxProps {
  Head: string;
  Textss: string;
  size: string
  col?: string
}

export const TextsComp: FC<Props> = ({ Head, Textss, size, col, ...rest }) => {
  return (
    <Box display="flex" flexDirection="column" {...rest}>
      <Box mb="1rem">
        <Heading color={`${col}`} fontSize={`${size}rem`} fontWeight="medium">
          {Head}
        </Heading>
      </Box>
      <Text color={`${col}`}>{Textss}</Text>
    </Box>
  );
};
