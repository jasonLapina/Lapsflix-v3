import { Box } from "@chakra-ui/react";
import axiosInstance from "../../shared/axiosInstance";
import AvailableMovies from "../../components/Movies/AvailableMovies";

function index(props) {
  return <AvailableMovies movies={props.movies} />;
}

export default index;

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
