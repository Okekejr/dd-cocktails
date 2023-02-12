import { Flex, FlexProps, Link, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Disclaimer: FC<FlexProps> = (props) => {
  return (
    <Flex {...props}>
      <Text fontSize="1rem" marginBottom="1rem">
        *The purpose of this website is solely to display my UI/UX designing and
        Web development skills, it combines resources and ideas from different
        websites. This website was developed solely by{" "}
        <Link href="https://github.com/Okekejr" isExternal>
          Chukwuebuka Emmanuel Okeke (ME)
        </Link>
        and it does not intend to promote anything other than my skills. It was
        developed with Figma, Next.js, Chakra UI and Typescript. This website
        represents an Idea only and isn't a real place yet. For more information
        contact my email below.
      </Text>
    </Flex>
  );
};
