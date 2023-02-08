import { FC } from "react";
import { Flex, FlexProps, Menu, Link, MenuItem } from "@chakra-ui/react";
import { routes } from "../../util/routes/index";
import { IRoute } from "../../util/routes/IRoute";

export const NavLinks: FC<FlexProps> = (props) => {
  return (
    <Flex as="nav" alignItems="center" {...props}>
      {routes.map((routeGroup: IRoute) => {
        return (
          <Menu key={routeGroup.title} autoSelect={false}>
            <>
              <MenuItem
                as={Link}
                href={routeGroup.url}
                background="transparent"
                _hover={{ color: "#FBD38D", textDecor: "none" }}
                w="fit-content"
              >
                {routeGroup.title}
              </MenuItem>
            </>
          </Menu>
        );
      })}
    </Flex>
  );
};
