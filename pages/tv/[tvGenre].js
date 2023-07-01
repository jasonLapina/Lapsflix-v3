import { Box, Heading } from "@chakra-ui/react";
import genres from "../../data/tvGenres.json";
import AvailableMovies from "../../components/Movies/AvailableMovies";

import axiosInstance from "../../shared/axiosInstance";

function SeriesByGenre(props) {
  const { series, genreName } = props;

  return (
    <Box>
      <Heading>{genreName}</Heading>
      <AvailableMovies movies={series} />
    </Box>
  );
}

export default SeriesByGenre;

export async function getStaticProps({ params }) {
  const genreId = params.tvGenre;
  const genreName = genres.find((item) => String(item.id) === genreId).name;

  const { data } = await axiosInstance.get(
    `/discover/tv?with_genres=${genreId}`
  );
  const series = await data.results;

  return {
    props: {
      series,
      genreName,
    },
  };
}

export async function getStaticPaths() {
  const paths = genres.map((item) => {
    return {
      params: { tvGenre: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
