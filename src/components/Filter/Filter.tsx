import { styled } from "styled-components";
import FilterItem from "./components/FilterItem";
import { useState, useEffect } from "react";

interface FilterProps {
  options: DataRace[];
  title: string;
  setOptions: (value: DataRace[]) => void;
}

const Filter = ({ options, title, setOptions }: FilterProps) => {
  const changeOptions = (value: string) => {
    const newOptionsState = options.map((el) => {
      if (el.value === value) {
        el.active = !el.active;
        return el;
      }
      return el;
    });
    setOptions(newOptionsState);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <ListFilter>
        {options.map((el) => (
          <FilterItem
            onChange={changeOptions}
            item={el}
          />
        ))}
      </ListFilter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const ListFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Filter;
