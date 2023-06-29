import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
function NavBar() {
  const navItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Movies",
      path: "/",
    },
    {
      text: "TV",
      path: "/",
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
      py='4px'
      opacity='.7'
      _hover={{ opacity: 1 }}
      transition='all .4s'
    >
      <HStack gap='24px'>
        {navItems.map((item) => (
          <Button
            _visited={{
              color: "white",
            }}
            variant='link'
            key={item.path}
            as={Link}
            href={item.path}
            fontSize='18px'
          >
            {item.text}
          </Button>
        ))}
      </HStack>
    </Box>
  );
}

export default NavBar;