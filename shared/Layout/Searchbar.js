import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
function Searchbar() {
  return (
    <InputGroup maxW='280px' h='100%'>
      <Input py='2px' borderRadius='20px' h='100%' />
      <InputRightElement h='100%'>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
