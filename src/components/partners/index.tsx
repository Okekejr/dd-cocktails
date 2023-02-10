import { ContainerProps, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { SectionContainer } from "../SectionContainer";
import { Grid } from "./grid";
import { Partner } from "./partnerData";

interface Props extends ContainerProps {
  data: Partner;
}

export const Partners: FC<Props> = ({ data, ...rest }) => {
  return (
    <SectionContainer {...rest}>
      <Heading
        fontSize="2rem"
        fontWeight="bold"
        lineHeight="1.6em"
        mb={{ base: "2rem", md: "3rem" }}
      >
        Our Partners
      </Heading>
      <Grid data={data} />
    </SectionContainer>
  );
};
