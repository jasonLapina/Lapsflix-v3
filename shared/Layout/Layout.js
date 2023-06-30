import { Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MovieModal from "../../components/Movies/MovieModal";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function Layout({ children }) {
  const videoRef = useRef(null);
  const childRef = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!videoRef.current.style) return;
  //     videoRef.current.style.transform = "translateY(-120%)";
  //     videoRef.current.style.opacity = 0;
  //     childRef.current.style.marginTop = "-800px";
  //   }, 5000);
  // }, []);

  return (
    <Box minH='100vh' bgColor='black' color='white'>
      <MovieModal />
      <NavBar />
      <Box
        overflow='hidden'
        minH='600px'
        maxW='1440px'
        mx='auto'
        px='24px'
        py='80px'
      >
        {/* <Box
          ref={videoRef}
          mb='80px'
          transition='all .4s'
          as='video'
          w='1440px'
          borderRadius='10px'
          autoPlay
          muted
          mx='auto'
        >
          <source src='/videoBg.mp4' />
        </Box> */}

        <Box transition='all .4s' ref={childRef}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
