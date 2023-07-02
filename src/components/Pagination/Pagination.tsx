import { styled } from "styled-components";
import { FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import PaginationItem from "./components/PaginationItem";

interface PaginationProps {
  info?: CharacterCustom;
  pageState: number;
  setPageState: (item: number) => void;
}

const Pagination: FC<PaginationProps> = ({ info, pageState, setPageState }) => {
  return (
    <Container>
      <Arrow onClick={() => setPageState(pageState - 1)}>
        <AiOutlineLeft size={25} />
      </Arrow>
      <ContainerPages>
        {info?.page &&
          Array.from(Array(info.pages).keys()).map((el) => (
            <PaginationItem
              onClick={() => setPageState(el + 1)}
              current={el + 1 == pageState ? true : false}>
              {el + 1}
            </PaginationItem>
          ))}
      </ContainerPages>
      <Arrow onClick={() => setPageState(pageState + 1)}>
        <AiOutlineRight size={22} />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;

const ContainerPages = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const Arrow = styled.div`
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export default Pagination;
