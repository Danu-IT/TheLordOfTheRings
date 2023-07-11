import { FC } from "react";

import Quote from "../Quote/Quote";
import { Container } from "./style";

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

export default Quotes;
