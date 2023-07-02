import { FC } from "react";

import Quote from "../Quote/Quote";
import { styled } from "styled-components";

interface QuotesProps {
  list: QuoteCustomElement[];
}

const Quotes: FC<QuotesProps> = ({ list }) => {
  return (
    <Container>
      {list.map((el) => (
        <Quote item={el} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default Quotes;
