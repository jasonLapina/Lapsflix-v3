import { Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MovieModal from "../../components/Movies/MovieModal";

function Layout({ children }) {
  return (
    <Box minH='100vh' bgColor='black' color='white'>
      <MovieModal />
      <NavBar />
      <Box
        overflowX='hidden'
        minH='600px'
        maxW='1440px'
        mx='auto'
        px='24px'
        py='80px'
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
