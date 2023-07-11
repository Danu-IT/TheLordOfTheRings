import { FC, SetStateAction } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import PaginationItem from "./components/PaginationItem";
import { Arrow, Container, ContainerPages } from "./style";

interface PaginationProps {
  info?: CharacterCustom;
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({ info, pageState, setPageState }) => {
  if (info && info.pages === 1) {
    return null;
  }

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
              key={el}
              current={el + 1 === pageState ? true : false}>
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

export default Pagination;
