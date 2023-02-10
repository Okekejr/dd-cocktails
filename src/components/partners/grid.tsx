import { List, ListProps } from "@chakra-ui/react";
import { FC } from "react";
import { PartnerCard } from "./partnerCard";
import { Partner } from "./partnerData";

interface Props extends ListProps {
  data: Partner;
}

export const Grid: FC<Props> = ({ data, ...rest }) => {
  const sponsors = Object.values(data);

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
      {sponsors.map((logo, i) => {
        return <PartnerCard data={logo} key={i} />;
      })}
    </List>
  );
};
