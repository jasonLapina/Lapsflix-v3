import { Box, Heading } from "@chakra-ui/react";
import genres from "../../data/movieGenres.json";
import axiosInstance from "../../shared/axiosInstance";
import AvailableMovies from "../../components/Movies/AvailableMovies";

function MoviesByGenre(props) {
  const { movies, genreName: genre } = props;
  return (
    <Box>
      <Heading>{genre}</Heading>
      <Box>
        <AvailableMovies movies={movies} />
      </Box>
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
