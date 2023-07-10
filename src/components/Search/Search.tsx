import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";
import Sagests from "./components/Sagests/Sagests";

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

interface SearchStyleProps {
  view: boolean;
}

const Container = styled.div<SearchStyleProps>`
  position: relative;
`;
const Input = styled.input<SearchStyleProps>`
  background: ${({ view }) => (view ? "white" : "inherit")};
  outline: none;
  border: none;
  color: ${({ view }) => (view ? "black" : "white")};
  border-bottom: 1px solid white;
  width: 300px;
  font-size: 25px;
  padding: 5px 0;
  position: relative;
  z-index: 3;
`;

export default Search;
