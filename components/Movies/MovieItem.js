import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openModal } from "../../shared/modalStore";

function MovieItem(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(openModal(movie));
  };

  const noimageHandler = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
  };
  return (
    <>
      <Box role='group' pos='relative' px='8px' {...props}>
        <Image
          cursor='pointer'
          loading='lazy'
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
          transition='all .4s'
          _groupHover={{
            filter: "brightness(.6)",
          }}
          onError={noimageHandler}
        />

        <Button
          transition='all .4s'
          pos='absolute'
          bottom='0px'
          // bottom='-110px'
          left='16px'
          opacity={0}
          _groupHover={{
            bottom: "16px",
            opacity: 1,
          }}
          bgColor='rgba(220,20,60,.4)'
          backdropFilter='auto'
          backdropBlur='10px'
          onClick={handleDetails}
          color='white'
          _hover={{
            bgColor: "crimson",
          }}
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
            top='52%'
            opacity={0}
            transform='translate(-50%,-50%)'
            fontSize='80px'
            as={BsPlayCircleFill}
            color='crimson'
            _groupHover={{
              top: "50%",
              opacity: 1,
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default MovieItem;
