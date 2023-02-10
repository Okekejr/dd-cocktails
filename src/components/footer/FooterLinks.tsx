import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { routes } from "@/util/routes";
import { LinksCard } from "./LinksCard";

export const FooterLinks: FC = () => {
  return (
    <Flex
      w={{ base: "12rem", md: "20rem" }}
      justifyContent="space-between"
      mt={{ base: "2rem", md: "0" }}
    >
      {routes.map((item, i) => {
        return <LinksCard data={item} key={i} />;
      })}
    </Flex>
  );
};
