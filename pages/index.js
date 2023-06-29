import { Box, Heading } from "@chakra-ui/react";
import AvailableMovies from "../components/Movies/AvailableMovies";
import axiosInstance from "../shared/axiosInstance";
import Hero from "../components/Home/Hero";

function index(props) {
  return (
    <Box>
      <Hero />
    </Box>
  );
}

export default index;

export async function getStaticProps() {
  const res = await axiosInstance.get("/discover/movie");
  const movies = res.data.results;
  return {
    props: { movies },
  };
}
