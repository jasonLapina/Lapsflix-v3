import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Grid,
  Image,
  HStack,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import movieGenres from "../../data/movieGenres.json";
import tvGenres from "../../data/tvGenres.json";
import { closeModal } from "../../shared/modalStore";
function MovieModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalState = useSelector((state) => state.modal);
  const modalIsOpen = modalState.isOpen;
  const movie = modalState.movie;

  const dispatch = useDispatch();
  useEffect(() => {
    if (modalIsOpen) onOpen();
    else onClose();
  }, [modalIsOpen, onOpen, onClose]);

  const closeHandler = () => {
    dispatch(closeModal());
  };

  const {
    name,
    title,
    overview,
    backdrop_path,
    vote_count,
    vote_average,
    genre_ids,
  } = movie;

  const voteStyling = () => {
    if (vote_average < 5) return "DarkRed";
    if (vote_average > 5 && vote_average < 7.6) return "DarkOrange";
    if (vote_average >= 7.5) return "ForestGreen";
  };

  const genreNames = () => {
    if (!name)
      return movieGenres
        .filter((item) => genre_ids.includes(item.id))
        .map((item) => item.name);

    if (!title)
      return tvGenres
        .filter((item) => genre_ids.includes(item.id))
        .map((item) => item.name);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        size='4xl'
        blockScrollOnMount={false}
        onClose={closeHandler}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize='32px'>{title || name}</Text>
            <HStack gap='8px'>
              {genreNames().map((genre, i) => (
                <Text fontSize='18px' fontWeight='normal' key={genre + i}>
                  {genre}
                  {i === genre_ids.length - 1 ? "" : ","}
                </Text>
              ))}
            </HStack>
            <Text>
              <CircularProgress
                value={(vote_average * 10).toFixed(0)}
                color={voteStyling()}
              >
                <CircularProgressLabel>
                  {(vote_average * 10).toFixed(0)}%
                </CircularProgressLabel>
              </CircularProgress>
              ({vote_count})
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb='40px'>
            <Grid gridTemplateColumns='1fr 1fr'>
              <Image
                borderRadius='10px'
                alt={title}
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                loading='lazy'
                boxShadow='4px 4px coral'
              />
              <Text overflowY='auto' pl='24px'>
                {overview}
              </Text>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MovieModal;
