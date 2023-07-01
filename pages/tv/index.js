import { Box, Heading } from "@chakra-ui/react";
import AvailableMovies from "../../components/Movies/AvailableMovies";
import axiosInstance from "../../shared/axiosInstance";

function index({ series }) {
  return (
    <Box>
      <Heading textAlign='center' mb='40px'>
        Discover Series
      </Heading>
      <AvailableMovies movies={series} />;
    </Box>
  );
}

export default index;

export async function getStaticProps() {
  const { data } = await axiosInstance.get("/discover/tv");
  const { results, page, total_pages, total_results } = await data;
  return {
    props: {
      page,
      series: results,
      total_pages,
      total_results,
    },
  };
}
