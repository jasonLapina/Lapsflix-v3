import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../shared/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { Provider } from "react-redux";
import { modalStore } from "../shared/modalStore";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={modalStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
