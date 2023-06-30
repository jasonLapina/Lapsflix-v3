import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import Searchbar from "./Searchbar";
import CategoryMenu from "./CategoryMenu";
function NavBar() {
  const navItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Movies",
      path: "/movies",
    },
    {
      text: "TV",
      path: "/tv",
    },
  ];

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
      py='6px'
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
          <CategoryMenu />
        </HStack>

        <Searchbar />
      </HStack>
    </Box>
  );
}

export default NavBar;
