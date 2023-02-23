import { BoxProps, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IRoute } from "../../util/routes/IRoute";

interface Props extends BoxProps {
  data: IRoute;
}

export const LinksCard: FC<Props> = ({ data, ...rest }) => {
  const { url, title } = data;
  return (
    <Link href={url}>
      <Text as="u" fontSize="1rem" textDecoration="none">
        {title}
      </Text>
    </Link>
  );
};
