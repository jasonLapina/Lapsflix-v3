import { Box, Center, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import axiosInstance from "../../shared/axiosInstance";
import { useRouter } from "next/router";
import AvailableMovies from "../../components/Movies/AvailableMovies";
import InfiniteMovies from "../../components/Movies/InfiniteMovies";

function SearchPage() {
  const router = useRouter();
  const { query } = router;
  const userQuery = query.query;

  const fetchItems = async (type) => {
    const { data } = await axiosInstance.get(
      `search/${type}?query=${userQuery}`
    );
    return data;
  };

  const { data: movies, isLoading: movieLoading } = useQuery(
    ["movies", userQuery],
    () => fetchItems("movie")
  );
  const { data: series, isLoading: seriesLoading } = useQuery(
    ["series", userQuery],
    () => fetchItems("tv")
  );

  if (movieLoading || seriesLoading)
    return (
      <Center my='120px'>
        <Heading textAlign='center'>Loading...</Heading>
      </Center>
    );

  const infiniteConfig = {
    query: userQuery,
  };

  return (
    <Box>
      <Heading mb='24px'>Search for: {userQuery}</Heading>
      <AvailableMovies movies={[...movies.results, ...series.results]} />
      <InfiniteMovies apiURL={`/search/movie`} config={infiniteConfig} />
    </Box>
  );
}

export default SearchPage;
