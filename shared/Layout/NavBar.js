import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import Searchbar from "./Searchbar";
import CategoryMenu from "./CategoryMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import movieGenres from "../../data/movieGenres.json";
import tvGenres from "../../data/tvGenres.json";

function NavBar() {
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
    console.log(query);
    if (pathname !== "/") {
      setDisplayPath(true);
      if (query && pathname.startsWith("/movies")) {
        const genreName = movieGenres.find(
          (item) => String(item.id) === query.movieGenre
        )?.name;

        setFormattedPath(genreName + " in movies");
      }

      switch (pathname) {
        case "/movies":
          setFormattedPath("all movies");
          break;
        case "/movies":
          setFormattedPath("all movies");
          break;
      }
    } else setDisplayPath(false);
  }, [pathname, query]);

  return (
    <Box
      pos='fixed'
      top='16px'
      bgColor='coral'
      w='1280px'
      borderRadius='20px'
      left='50%'
      transform='translateX(-50%)'
      px='32px'
      opacity='.7'
      _hover={{ opacity: 1 }}
      transition='all .4s'
      zIndex={999}
      _focusWithin={{
        opacity: 1,
      }}
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
        {displayPath && <Text>Browsing: {formattedPath}</Text>}
        <Searchbar />
      </HStack>
    </Box>
  );
}

export default NavBar;
