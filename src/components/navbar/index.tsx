import { Flex, Link, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { Logo } from "../logo";
import { MobileDrawer } from "./MobileDrawer";
import { MobileToggle } from "./MobileToggle";
import { NavLinks } from "./NavLinks";
import { ToggleColorMode } from "./ToggleColorMode";

export const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      py={{ base: 3, md: 2 }}
      zIndex="sticky"
      left="0"
      position="fixed"
      top="0"
      w="100%"
      justify="center"
      borderBottom="1px solid"
      backgroundColor="#fff"
      color="#000"
      borderBottomColor="#FBD38D"
      _before={{
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      transition="all 200ms ease-in-out"
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxW="container.xl"
        w={{ base: "100%", md: "90%", lg: "100%" }}
        px={{ base: 6, lg: 24 }}
        zIndex={1}
      >
        <Link aria-label="Logo" href="/">
          <Logo w={32} h={14} />
        </Link>

        <NavLinks
          marginInlineEnd={{ md: "1rem" }}
          display={{ base: "none", md: "flex", lg: "flex" }}
          height="2.5rem"
          gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }}
        />

        <MobileToggle
          isOpen={isOpen}
          onClick={onOpen}
          marginInlineStart={{ base: "1rem" }}
          mr={-4}
        />

        <ToggleColorMode />
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  );
};
