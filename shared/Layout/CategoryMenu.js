import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import movieGenres from "../../data/movieGenres.json";
import tvGenres from "../../data/tvGenres.json";

const combinedGenres = Array.from(new Set([...movieGenres, ...tvGenres]));

function CategoryMenu() {
  return (
    <Menu>
      <MenuButton
        _visited={{
          color: "white",
        }}
        variant='unstyled'
        fontSize='18px'
        as={Button}
        rightIcon={<ChevronDownIcon transform='translate(-3px,3px)' />}
      >
        Categories
      </MenuButton>
      <MenuList
        display='grid'
        rowGap='8px'
        columnGap='16px'
        gridTemplateColumns='1fr 1fr 1fr'
        color='black'
      >
        {combinedGenres.map((item, i) => (
          <MenuItem
            _hover={{
              textDecor: "underline",
            }}
            w='fit-content'
            key={item.id + i}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CategoryMenu;
