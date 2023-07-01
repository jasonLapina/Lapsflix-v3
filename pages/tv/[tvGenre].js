import { Box, Heading } from "@chakra-ui/react";
import genres from "../../data/tvGenres.json";
import AvailableMovies from "../../components/Movies/AvailableMovies";

import axiosInstance from "../../shared/axiosInstance";
import InfiniteMovies from "../../components/Movies/InfiniteMovies";

function SeriesByGenre(props) {
  const { series, genreName, genreId: id } = props;

  const infiniteConfig = {
    params: {
      with_genres: id,
    },
  };

  return (
    <Box>
      <Heading>{genreName}</Heading>
      <AvailableMovies movies={series} />
      <InfiniteMovies apiURL='/discover/tv' config={infiniteConfig} />
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
      genreId,
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
