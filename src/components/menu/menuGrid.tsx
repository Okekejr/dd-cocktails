import { List, ListProps } from "@chakra-ui/react";
import { FC } from "react";
import { MenuCard } from "./menuCard";
import { CardP } from "./menuData";

interface Props extends ListProps {
  data: CardP;
}

export const MenuGrid: FC<Props> = ({ data, ...rest }) => {
  const drinks = Object.values(data);

  return (
    <List
      display="grid"
      gap={6}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      {...rest}
    >
      {drinks.map((item, i) => {
        return <MenuCard data={item} key={i} />;
      })}
    </List>
  );
};
