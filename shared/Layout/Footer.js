import { Box, Heading, Text } from "@chakra-ui/react";
function Footer() {
  return (
    <Box px='64px' py='32px' bgColor='#141414' h='30vh'>
      <Box color='gray' fontSize='40px'>
        <Heading
          bgClip='text'
          bgImage={"linear-gradient(to right,crimson 40%,cyan)"}
          w='fit-content'
          mb='24px'
        >
          LAPSFLIX
        </Heading>
        <Box>
          <Text fontSize='16px' w='fit-content'>
            Demo web app to explore movies/series and see {"what's"} trending,
            upcoming, etc.
          </Text>
          <Text
            as='a'
            href='https://jasonlapina.com'
            target='_blank'
            rel='noreferrer'
            fontSize={{ base: "24px", md: "40px" }}
          >
            &copy; Jason Lapina.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
