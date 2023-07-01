import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";
function Searchbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery("");
    console.log(query);
    router.push(`/search/${query}`);
  };
  return (
    <InputGroup as='form' onSubmit={submitHandler} maxW='280px' h='100%'>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        py='2px'
        borderRadius='20px'
        h='100%'
      />
      <InputRightElement onClick={submitHandler} h='100%'>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
