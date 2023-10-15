import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { Provider } from "react-redux";
import { modalStore } from "../shared/modalStore";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Layout from "../shared/Layout/Layout";
import Hero from "../components/Home/Hero";
import Footer from "../shared/Layout/Footer";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <ChakraProvider>
      <QueryClientProvider client={client}>
        <Provider store={modalStore}>
          <Hero />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
