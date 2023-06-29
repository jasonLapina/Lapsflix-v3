import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useEffect, useRef } from "react";

function Layout({ children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.style.opacity = ".4";
    }, 6000);
  });

  return (
    <Box minH='100vh' bgColor='black' color='white'>
      <Box as='video' transition='all 1s' ref={videoRef} autoPlay muted>
        <source src='/videoBg.mp4' />
      </Box>
      <NavBar />
      <Box
        overflowX='hidden'
        minH='600px'
        maxW='1440px'
        mx='auto'
        px='24px'
        py='16px'
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
