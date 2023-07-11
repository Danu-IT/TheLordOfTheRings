import { ChangeEvent, useState } from "react";

import Button from "../UI/Button";
import Sagests from "./components/Sagests/Sagests";
import { Container, Input } from "./style";

interface SearchProps {
  onClick: (value: string) => void;
  searchValue: string;
}

const Search = ({ onClick, searchValue }: SearchProps) => {
  const [value, setValue] = useState(searchValue);
  const [isFocusSearch, setIsFocuseSearch] = useState(false);

  return (
    <Container view={isFocusSearch}>
      <Input
        view={isFocusSearch}
        onFocus={() => setIsFocuseSearch(true)}
        onBlur={() => setTimeout(() => setIsFocuseSearch(false), 300)}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button
        variant={isFocusSearch ? "white" : "inherit"}
        color={isFocusSearch ? "black" : "white"}
        onClick={() => onClick(value)}>
        Поиск
      </Button>
      {isFocusSearch && <Sagests />}
    </Container>
  );
};

export default Search;
