import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ChakraProvider } from "@chakra-ui/react";

const components = {
  p: (props) => <p style={{ fontSize: "16px" }} {...props}></p>,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
