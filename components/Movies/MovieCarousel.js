import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import MovieItem from "./MovieItem";

function MovieCarousel({ movies, title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Box w='1280px'>
      <Text ml='8px' w='fit-content' mb='8px' fontSize='24px'>
        {title}
      </Text>
      <Box as={Slider} {...settings}>
        {movies.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </Box>
    </Box>
  );
}

export default MovieCarousel;
