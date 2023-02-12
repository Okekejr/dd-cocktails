import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { fonts } from "./Fonts";
import { Heading } from "./Heading";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
  fonts,
  components: {
    Heading,
  },
});

export default theme;
