import { arrayOfSorts } from "../../utils/data";
import { Container, SortElement, SortList, Title } from "./style";

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

export default Sort;
