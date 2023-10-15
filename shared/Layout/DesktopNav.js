import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import Searchbar from "./Searchbar";
import CategoryMenu from "./CategoryMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import movieGenres from "../../data/movieGenres.json";
import tvGenres from "../../data/tvGenres.json";

function DesktopNav() {
  const router = useRouter();
  const { pathname, query } = router;

  const [displayPath, setDisplayPath] = useState(false);
  const [formattedPath, setFormattedPath] = useState("");

  const navItems = [
    {
      text: "Home",
      path: "/",
    },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setDisplayPath(true);
      if (query && pathname.startsWith("/movies")) {
        const genreName = movieGenres.find(
          (item) => String(item.id) === query.movieGenre
        )?.name;
        setFormattedPath(genreName + " in movies");
      }
      if (query && pathname.startsWith("/tv")) {
        const genreName = tvGenres.find(
          (item) => String(item.id) === query.tvGenre
        )?.name;
        setFormattedPath(genreName + " in series");
      }

      switch (pathname) {
        case "/movies":
          setFormattedPath("all movies");
          break;
        case "/tv":
          setFormattedPath("all series");
          break;
      }
    } else setDisplayPath(false);
  }, [pathname, query]);

  return (
    <Box
      pos='fixed'
      top='16px'
      // bgColor='rgba(255,255,255,.3)'
      bgImage={
        "linear-gradient(to-r, rgba(220,60,20,.3),rgba(103, 242, 209,.3))"
      }
      backdropFilter='auto'
      backdropBlur='15px'
      w='60vw'
      minW='720px'
      maxW='1240px'
      borderRadius='20px'
      left='50%'
      transform='translateX(-50%)'
      px='32px'
      _hover={{ opacity: 1 }}
      transition='all .4s'
      zIndex={999}
    >
      <HStack justifyContent='space-between'>
        <HStack gap='24px'>
          {navItems.map((item, i) => (
            <Button
              _visited={{
                color: "white",
              }}
              variant='link'
              key={item.path + i}
              as={Link}
              href={item.path}
              fontSize='18px'
            >
              {item.text}
            </Button>
          ))}
          <CategoryMenu type={"Movie"} />
          <CategoryMenu type={"Series"} />
        </HStack>
        {displayPath && !query.query && <Text>Browsing: {formattedPath}</Text>}
        {displayPath && query.query && <Text>Searching: {query.query}</Text>}

        <Searchbar />
      </HStack>
    </Box>
  );
}

export default DesktopNav;
