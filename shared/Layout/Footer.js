import { Box, Text } from "@chakra-ui/react";
function Footer() {
  return (
    <Box px='64px' py='32px' bgColor='#141414' h='30vh'>
      <Box fontSize='40px'>
        LapsFlix, movie browsing web app created by
        <Text
          as='a'
          href='https://jasonlapina.com'
          target='_blank'
          rel='noreferrer'
        >
          Jason Lapina.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
