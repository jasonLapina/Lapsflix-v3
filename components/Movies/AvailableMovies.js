import { Box, Grid } from "@chakra-ui/react";
import MovieItem from "./MovieItem";

function AvailableMovies({ movies }) {
  return (
    <Grid
      columnGap='16px'
      rowGap='32px'
      gridTemplateColumns='repeat(auto-fit,minmax(280px,1fr))'
      justifyContent='center'
      justifyItems='center'
    >
      {movies.map((item, i) => {
        return <MovieItem key={item.id + i} movie={item} />;
      })}
    </Grid>
  );
}

export default AvailableMovies;
