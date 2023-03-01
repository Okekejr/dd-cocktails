import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  BoxProps,
  Text,
  Heading,
  chakra,
} from "@chakra-ui/react";
import { CardM } from "./menuData";
import NextImage from "next/image";

interface Props extends BoxProps {
  data: CardM;
}

const MyImages = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "onClick"].includes(prop),
});

export const MenuCard: FC<Props> = ({ data, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, description, image } = data;

  return (
    <Box {...rest}>
      <MyImages
        onClick={onOpen}
        _hover={{ transform: "scale(1.13)", opacity: 1, cursor: "pointer" }}
        overflow="hidden"
        opacity="0.8"
        transform="scale(0.95)"
        transition="transform 0.8s, opacity 0.5s"
        src={image}
        width={1000}
        height={320}
        quality={90}
        alt={name}
      />

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalBody>
            <MyImages
              src={image}
              mb={4}
              width={300}
              height={250}
              quality={90}
              alt={name}
            />
            <Heading mb={4}>{name}</Heading>
            <Text as="p">{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
