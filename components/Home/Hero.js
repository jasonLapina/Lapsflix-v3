import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Box bgColor='#141414' pos='relative'>
      <Box pos='relative'>
        <Box as='video' mx='auto' autoPlay muted>
          <source src='/heroVid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </Box>
        <Box
          zIndex={10}
          h='100%'
          top='0'
          left='0'
          w='100%'
          pos='absolute'
          bgImage='linear-gradient(to bottom, rgba(0,0,0,0) 80%, #141414)'
        />
      </Box>
      <Heading
        bgImage={"linear-gradient(to right,crimson 40%,cyan)"}
        bgClip='text'
        mt='40px'
        fontSize='15vw'
        pos='absolute'
        zIndex={2}
        left='50%'
        top='40%'
        transform='translate(-50%,-50%)'
        filter='drop-shadow(4px 4px 16px white)'
      >
        LAPSFLIX
      </Heading>
      <ArrowDownIcon
        onClick={() => {
          const element = document.getElementById("main");
          const offset = -120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY + offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
        cursor='pointer'
        transition='all .4s'
        _hover={{
          color: "cyan",
        }}
        pos='absolute'
        left='50%'
        top='70%'
        transform='translate(-50%,-50%)'
        fontSize='80px'
        color='crimson'
        filter='drop-shadow(2px 2px 4px white)'
        zIndex={11}
      />
    </Box>
  );
}

export default Hero;
