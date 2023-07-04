import { styled } from "styled-components";
import { arrayOfSorts } from "../../utils/data";

interface SortProps {
  sort: string;
  setSort: (sort: string) => void;
}

const Sort = ({ sort, setSort }: SortProps) => {
  return (
    <Container>
      <Title>Сортировка по :</Title>
      <SortList>
        {arrayOfSorts.map((el) => (
          <SortElement
            key={el.result}
            onClick={() => setSort(el.result)}
            view={el.result !== sort}>
            {el.value}
          </SortElement>
        ))}
      </SortList>
    </Container>
  );
};

interface SortStyleProps {
  view: boolean;
}

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px;
`;

const SortList = styled.div`
  display: flex;
  gap: 5px;
`;
const Title = styled.div``;
const SortElement = styled.div<SortStyleProps>`
  cursor: pointer;
  color: ${({ view }) => (view ? "white" : "yellow")};
  text-decoration: ${({ view }) => (view ? "none" : "underline")};
`;

export default Sort;
