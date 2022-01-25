import {
  ChakraProvider,
  Container,
  extendTheme,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

const colors = {
  brand: {
    900: "",
    800: "",
    700: "",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxW={"4xl"}>
        <VStack spacing={8} alignItems={"stretch"}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
