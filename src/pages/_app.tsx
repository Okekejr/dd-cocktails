import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { Layout } from "@/components/Layout";
import { DefaultSeo } from "next-seo";
import { FontFaces } from "@/theme/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Okeke & Robles"
        description="Where Cocktail meets Magic"
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <FontFaces />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
