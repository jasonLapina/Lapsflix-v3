import axiosInstance from "../../shared/axiosInstance";
import AvailableMovies from "../../components/Movies/AvailableMovies";
import { Box, Heading } from "@chakra-ui/react";
import InfiniteMovies from "../../components/Movies/InfiniteMovies";

function Index(props) {
  return (
    <Box>
      <Heading textAlign='center' mb='40px'>
        Discover Movies
      </Heading>
      <AvailableMovies movies={props.movies} />
      <InfiniteMovies />
    </Box>
  );
}

export default Index;

export async function getStaticProps() {
  const { data } = await axiosInstance.get("/discover/movie");
  const { results, page, total_pages, total_results } = await data;
  return {
    props: {
      page,
      movies: results,
      total_pages,
      total_results,
    },
  };
}
