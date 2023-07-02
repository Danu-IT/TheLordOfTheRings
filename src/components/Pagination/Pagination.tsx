import { styled } from "styled-components";
import { FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import List from "../List";
import PaginationItem from "./components/PaginationItem";

interface PaginationProps {
  info?: CharacterCustom;
  pageState: number;
  setPageState: (item: number) => void;
}

const Pagination: FC<PaginationProps> = ({ info, pageState, setPageState }) => {
  const newPage = (item: number) => {
    setPageState(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <AiOutlineLeft />
      {info?.page && (
        <List
          renderItem={(el, i) => (
            <PaginationItem
              onClick={() => newPage(el + 1)}
              current={el + 1 == pageState ? true : false}>
              {el + 1}
            </PaginationItem>
          )}
          items={Array.from(Array(info?.pages).keys())}
        />
      )}
      <AiOutlineRight />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export default Pagination;
