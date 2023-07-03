import { Box, Heading } from "@chakra-ui/react";
import genres from "../../data/movieGenres.json";
import axiosInstance from "../../shared/axiosInstance";
import AvailableMovies from "../../components/Movies/AvailableMovies";
import InfiniteMovies from "../../components/Movies/InfiniteMovies";

function MoviesByGenre(props) {
  const { movies, genreName: genre, genreId: id } = props;
  const infiniteConfig = {
    params: { with_genres: String(id) },
  };
  return (
    <Box>
      <Heading mb='24px'>{genre}</Heading>
      <AvailableMovies movies={movies} />
      <InfiniteMovies config={infiniteConfig} />
    </Box>
  );
}

export default MoviesByGenre;

export async function getStaticProps({ params }) {
  const genreId = params.movieGenre;
  const genreName = genres.find((item) => String(item.id) === genreId).name;

  const { data } = await axiosInstance.get(
    `/discover/movie?with_genres=${genreId}`
  );
  const movies = await data.results;

  return {
    props: {
      movies,
      genreName,
      genreId,
    },
  };
}

export async function getStaticPaths() {
  const paths = genres.map((item) => {
    return {
      params: { movieGenre: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
