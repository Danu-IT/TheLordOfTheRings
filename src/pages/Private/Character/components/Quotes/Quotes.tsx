import { FC } from "react";

import List from "../../../../../components/List";
import Quote from "../Quote/Quote";
import { styled } from "styled-components";

interface QuotesProps {
  list: QuoteCustomElement[];
}

const Quotes: FC<QuotesProps> = ({ list }) => {
  return (
    <Container>
      <List
        items={list}
        renderItem={(el, i) => <Quote item={el}></Quote>}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default Quotes;
