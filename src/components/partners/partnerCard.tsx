import { Link, LinkProps } from "@chakra-ui/react";
import { FC } from "react";
import { List } from "./partnerData";

interface Props extends LinkProps {
  data: List;
}

export const PartnerCard: FC<Props> = ({ data, ...rest }) => {
  const { name, url, icon } = data;
  return (
    <Link
      href={url}
      isExternal={true}
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="#FBD38D"
      border="1px solid"
      borderColor="surface.tertiary"
      borderRadius="24px"
      p={4}
      m="auto"
      w={{ base: "20.2rem", md: "23rem", lg: "25rem" }}
      h="12rem"
      {...rest}
    >
      {icon}
    </Link>
  );
};
