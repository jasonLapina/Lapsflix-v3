import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Icon,
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import Searchbar from "./Searchbar";
import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navItems = [
    {
      text: "Home",
      path: "/",
    },
  ];

  return (
    <Box
      pos='sticky'
      top='0'
      zIndex={99}
      bgImage={
        "linear-gradient(to-r, rgba(220,60,20,.3),rgba(103, 242, 209,.3))"
      }
      backdropFilter='auto'
      backdropBlur='10px'
    >
      <HStack px='16px' py='8px' justifyContent='space-between' w='100%'>
        <Icon fontSize='24px' onClick={onOpen} as={RxHamburgerMenu} />
        <Searchbar />
      </HStack>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          color='cyan'
          bgColor='rgba(220,60,20,.3)'
          backdropFilter='auto'
          backdropBlur='10px'
        >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody fontWeight='bold'>
            <VStack gap='40px' alignItems='end'>
              {navItems.map((item) => (
                <Text as={Link} href='/' key={item.path}>
                  {item.text}
                </Text>
              ))}
              <CategoryMenu type='Movie' />
              <CategoryMenu type='Series' />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
