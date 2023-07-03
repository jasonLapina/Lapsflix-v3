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
    <>
      <HStack px='16px' py='8px' justifyContent='space-between' w='100%'>
        <Icon fontSize='24px' onClick={onOpen} as={RxHamburgerMenu} />
        <Searchbar />
      </HStack>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor='whiteAlpha.900'>
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
    </>
  );
}

export default MobileNav;
