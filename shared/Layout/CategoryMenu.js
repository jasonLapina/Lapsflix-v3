import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import movieGenres from "../../data/movieGenres.json";
import tvGenres from "../../data/tvGenres.json";
import Link from "next/link";

function CategoryMenu({ type }) {
  const genresList = type === "Movie" ? movieGenres : tvGenres;

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
        {type} Genres
      </MenuButton>
      <MenuList
        display='grid'
        rowGap='8px'
        columnGap='16px'
        gridTemplateColumns='1fr 1fr 1fr'
        color='black'
      >
        {genresList.map((item, i) => (
          <MenuItem
            _hover={{
              textDecor: "underline",
            }}
            w='fit-content'
            key={item.id + i}
            as={Link}
            href={`/${type === "Movie" ? "movies" : "tv"}/${item.id}`}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CategoryMenu;
