import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";
import Search from "../../../components/Search/Search";
import Sort from "../../../components/Sort/Sort";

const Home = () => {
  const [searchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const sortQuery = searchParams.get("sort") || "";

  const [pageState, setPageState] = useState(Number(pageQuery));
  const [search, setSeacrh] = useState<string>(searchQuery);
  const [sort, setSort] = useState(sortQuery);

  const navigate = useNavigate();

  const { data } = ringsAPI.useGetCharactersQuery({
    page: pageState,
    name: search,
    sort: sort,
  });

  useEffect(() => {
    navigate(`?page=${pageState}&search=${search}&sort=${sort}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageState, setPageState, search, setSeacrh, sort, setSort]);

  useEffect(() => {
    setSort("asc");
  }, []);

  return (
    <Container>
      <UserControl>
        <Search
          searchValue={search}
          onClick={(value: string) => setSeacrh(value)}
        />
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </UserControl>
      <Cards>
        {data?.docs.length ? (
          data.docs.map((el) => (
            <Card
              onClick={(id: string) => navigate(`/${id}`)}
              key={el.id}
              item={el}
            />
          ))
        ) : (
          <Title>По вашему запросу ничего не найдено</Title>
        )}
      </Cards>
      {data?.docs.length !== 0 && (
        <Pagination
          setPageState={setPageState}
          pageState={pageState}
          info={data}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1300px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  margin: 40px 30px;
`;

const UserControl = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.h2``;

export default Home;
