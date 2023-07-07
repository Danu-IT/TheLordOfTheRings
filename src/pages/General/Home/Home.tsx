import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";
import Search from "../../../components/Search/Search";
import Sort from "../../../components/Sort/Sort";
import Filters from "./components/Filters";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  changeFilterRace,
  checkLikeStateAndFavorite,
} from "../../../store/slices/speciesSlice";
import { saveItem } from "../../../firebase/change";

const Home = () => {
  const [searchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const sortQuery = searchParams.get("sort") || "";
  const filterRaceQuery = searchParams.get("race") || "";

  const [pageState, setPageState] = useState(Number(pageQuery));
  const [search, setSeacrh] = useState<string>(searchQuery);
  const [sort, setSort] = useState(sortQuery);

  const navigate = useNavigate();

  const { filterRace, favorites, data } = useAppSelector(
    (state) => state.speciesSlice
  );
  const { isAuth, user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const { data: ringsData } = ringsAPI.useGetCharactersQuery({
    page: pageState,
    name: search,
    sort: sort,
    race: filterRace,
  });

  useEffect(() => {
    ringsData && dispatch(checkLikeStateAndFavorite(ringsData));
  }, [favorites, ringsData]);

  useEffect(() => {
    if (isAuth && favorites && favorites.length && user.uid) {
      saveItem(favorites, user.uid, "favorites");
    }
  }, [favorites]);

  useEffect(() => {
    navigate(
      `?page=${pageState}&search=${search}&sort=${sort}&race=${filterRace}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageState, setPageState, search, setSeacrh, sort, setSort, filterRace]);

  useEffect(() => {
    dispatch(changeFilterRace(filterRaceQuery));
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
      <Center>
        <Filters />
        {data && (
          <Cards>
            {data.docs.length ? (
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
        )}
      </Center>
      {data && data.docs.length !== 0 && data.docs && (
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
  max-width: 1350px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  margin: 40px 30px;
`;

const UserControl = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Center = styled.div`
  display: flex;
`;
const Title = styled.h2``;

export default Home;
