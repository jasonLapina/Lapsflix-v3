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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      maxW={{
        base: "320px",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      }}
    >
      <Text
        ml='8px'
        w='fit-content'
        textShadow='1px 1px crimson'
        mb='8px'
        fontSize='24px'
      >
        {title}
      </Text>
      <Box as={Slider} {...settings}>
        {movies.map((item, i) => (
          <MovieItem key={item.id + i} movie={item} />
        ))}
      </Box>
    </Box>
  );
}

export default MovieCarousel;
