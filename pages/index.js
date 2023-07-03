import { Box, VStack } from "@chakra-ui/react";
import axiosInstance from "../shared/axiosInstance";
import MovieCarousel from "../components/Movies/MovieCarousel";
import Head from "next/head";

function index({ movies }) {
  return (
    <>
      <Head>
        <title>LapsFlix</title>
      </Head>
      <VStack gap='80px'>
        <MovieCarousel title={"In theaters"} movies={movies.nowPlaying} />
        <MovieCarousel title={"Top Rated Movies"} movies={movies.topRated} />
        <MovieCarousel title={"Upcoming Movies"} movies={movies.upcoming} />
        <MovieCarousel title={"On Air TV"} movies={movies.tvToday} />
        <MovieCarousel title={"Top Rated Series"} movies={movies.tvTopRated} />
        <MovieCarousel title={"Upcoming series"} movies={movies.tvUpcoming} />
      </VStack>
    </>
  );
}

export default index;

export async function getStaticProps() {
  const req1 = axiosInstance.get("/movie/now_playing");
  const req2 = axiosInstance.get("/movie/top_rated");
  const req3 = axiosInstance.get("/movie/upcoming");
  const req4 = axiosInstance.get("/tv/airing_today");
  const req5 = axiosInstance.get("/tv/top_rated");
  const req6 = axiosInstance.get("/tv/on_the_air");

  const results = await Promise.all([req1, req2, req3, req4, req5, req6]);

  const movies = {
    nowPlaying: results[0].data.results,
    topRated: results[1].data.results,
    upcoming: results[2].data.results,
    tvToday: results[3].data.results,
    tvTopRated: results[4].data.results,
    tvUpcoming: results[5].data.results,
  };

  return {
    props: { movies },
    revalidate: 7200,
  };
}
