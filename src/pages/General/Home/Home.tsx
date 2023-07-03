import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../../../hooks/redux";
import { changeUser } from "../../../store/slices/auth";
import { auth } from "../../../firebase";
import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";
import Search from "../../../components/Search/Search";

const Home = () => {
  const [searchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";

  const [pageState, setPageState] = useState(Number(pageQuery));
  const [search, serSeacrh] = useState<string>(searchQuery);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = ringsAPI.useGetCharactersQuery({
    page: pageState,
    name: search,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
    });
  }, []);

  useEffect(() => {
    navigate(`?page=${pageState}&search=${search}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageState, setPageState, search, serSeacrh]);

  return (
    <Container>
      <Search
        searchValue={search}
        onClick={(value: string) => serSeacrh(value)}></Search>
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
  align-items: center;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  margin: 40px 30px;
`;

const Title = styled.h2``;

export default Home;
