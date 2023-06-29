import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import Slider from "react-slick";

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
          <Box role='group' pos='relative' px='8px' key={item.id}>
            <Image
              cursor='pointer'
              loading='lazy'
              src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
              alt={item.title}
              transition='all .4s'
              _groupHover={{
                filter: "brightness(.6)",
              }}
            />

            <Button
              transition='all .4s'
              pos='absolute'
              bottom='-48px'
              left='16px'
              // opacity='0'
              _groupHover={{
                bottom: "16px",
                opacity: 1,
              }}
              bgColor='coral'
            >
              Details
            </Button>
            <Box
              as='a'
              rel='noopener noreferrer'
              href='https://www.youtube.com/watch?v=JeimE8Wz6e4'
              target='_blank'
            >
              <Icon
                transition='all .4s'
                cursor='pointer'
                pos='absolute'
                left='50%'
                top='60%'
                opacity={0}
                transform='translate(-50%,-50%)'
                fontSize='80px'
                as={BsPlayCircleFill}
                color='coral'
                _groupHover={{
                  top: "50%",
                  opacity: 1,
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MovieCarousel;
