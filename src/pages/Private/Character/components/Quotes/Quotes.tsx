import { FC } from "react";
import { styled } from "styled-components";

import Quote from "../Quote";

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
