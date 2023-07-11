import { useState, useMemo } from "react";

import { ringsAPI } from "../../../../../store/services/RingsService";
import { Add, Container } from "./style";

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

export default Quote;
