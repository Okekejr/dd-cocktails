import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Image,
  BoxProps,
  Text,
  Heading,
} from "@chakra-ui/react";
import { CardM } from "./menuData";

interface Props extends BoxProps {
  data: CardM;
}

export const MenuCard: FC<Props> = ({ data, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, description, image } = data;

  return (
    <Box {...rest}>
      <Image
        onClick={onOpen}
        _hover={{ transform: "scale(1.13)", opacity: 1, cursor: "pointer" }}
        overflow="hidden"
        opacity="0.8"
        transform="scale(0.95)"
        transition="transform 0.8s, opacity 0.5s"
        src={image}
        width="100%"
        height="20rem"
        alt={name}
      />

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalBody>
            <Image src={image} mb={4} alt={name} />
            <Heading mb={4}>{name}</Heading>
            <Text as="p">{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
