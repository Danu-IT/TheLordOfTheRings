import { useState, useMemo } from "react";
import { styled } from "styled-components";
import { ringsAPI } from "../../../../../services/RingsService";

interface QuoteProps {
  item: QuoteCustomElement;
}

const Quote = ({ item }: QuoteProps) => {
  const { data } = ringsAPI.useGetMovieIdQuery(item.movie);

  const movieName = useMemo(() => data?.docs[0].name, [data]);
  const [view, setView] = useState(false);

  return (
    <Container
      view={view}
      onMouseLeave={() => setView(false)}
      onMouseEnter={() => setView(true)}>
      <Add view={view}>
        <span>из фильма</span> - {movieName}
      </Add>
      {item.dialog}
    </Container>
  );
};

interface QuoteStyleProps {
  view: boolean;
}

const Container = styled.div<QuoteStyleProps>`
  border: 1px solid white;
  border-radius: 7px;
  padding: 7px;
  cursor: pointer;
`;

const Add = styled.div<QuoteStyleProps>`
  opacity: ${({ view }) => (view ? "1" : "0")};
  transition: opacity 0.9s;
  & > span {
    font-weight: bold;
  }
`;

export default Quote;
