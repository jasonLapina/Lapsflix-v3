import { Box, Center } from "@chakra-ui/react";
import axiosInstance from "../../shared/axiosInstance";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import AvailableMovies from "./AvailableMovies";

function InfiniteMovies({ apiURL = "/discover/movie", config = {} }) {
  const fetchMovies = async (page) => {
    const { data } = await axiosInstance.get(`${apiURL}?page=${page}`, config);
    return data;
  };
  const { data, isLoading, hasNextPage, fetchNextPage, isError } =
    useInfiniteQuery(
      "infinite",
      ({ pageParam = 2 }) => fetchMovies(pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.page === lastPage.total_pages) return undefined;
          else return lastPage.page + 1;
        },
      }
    );

  if (isLoading) return <Center>loading</Center>;
  if (isError) return <Center>error</Center>;

  const movies = data.pages.flatMap((page) => page.results);

  return (
    <Box
      as={InfiniteScroll}
      my='32px'
      hasMore={hasNextPage}
      loadMore={fetchNextPage}
    >
      <AvailableMovies movies={movies} />
    </Box>
  );
}

export default InfiniteMovies;
