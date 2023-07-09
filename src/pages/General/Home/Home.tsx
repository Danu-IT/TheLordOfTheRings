import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";
import Search from "../../../components/Search/Search";
import Sort from "../../../components/Sort/Sort";
import Filters from "./components/Filters";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  addItemHistory,
  checkLikeStateAndFavorite,
} from "../../../store/slices/speciesSlice";
import Modal from "../../../components/Modal";
import HelpContent from "../../../components/Modal/components/HelpContent";
import ViewCardsSwitch from "../../../components/ViewCardsSwitch/ViewCardsSwitch";
import { useAppContext } from "../../../hooks/useAppContext";

const Home = () => {
  const [searchParams] = useSearchParams();

  const pageQuery = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const sortQuery = searchParams.get("sort") || "";
  const filterRaceQuery = searchParams.get("race") || "";

  const { regularСardType } = useAppContext();

  const [pageState, setPageState] = useState(Number(pageQuery));
  const [search, setSeacrh] = useState<string>(searchQuery);
  const [sort, setSort] = useState(sortQuery);
  const [isModalHelp, setIsModalHelp] = useState(false);

  const { filterRace, favorites, data } = useAppSelector(
    (state) => state.speciesSlice
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: ringsData } = ringsAPI.useGetCharactersQuery({
    page: pageState,
    name: search,
    sort: sort,
    race: filterRace,
  });

  const handleSearch = (value: string) => {
    setSeacrh(value);
    if (value) {
      const path = `/?${createSearchParams({
        search: value,
        race: filterRace,
      })}`;
      dispatch(addItemHistory(path));
    }
  };

  useEffect(() => {
    setSort("asc");
  }, [filterRaceQuery]);

  useEffect(() => {
    ringsData && dispatch(checkLikeStateAndFavorite(ringsData));
  }, [favorites, ringsData]);

  useEffect(() => {
    navigate(
      `?${createSearchParams({
        search: search,
        race: filterRace,
        page: String(pageState),
        sort: sort,
      })}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageState, setPageState, search, setSeacrh, sort, setSort, filterRace]);

  useEffect(() => {
    setPageState(1);
  }, [search, setSeacrh, sort, setSort, filterRace]);

  return (
    <Container>
      <UserControl>
        <Search
          searchValue={search}
          onClick={handleSearch}
        />
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </UserControl>
      <ViewCardsSwitch />
      <Center>
        <Filters />
        {data && (
          <Cards view={regularСardType}>
            {data.docs.length ? (
              data.docs.map((el) => (
                <Card
                  isModalHelp={isModalHelp}
                  setIsModalHelp={setIsModalHelp}
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
      <Modal
        visibleModal={isModalHelp}
        setVisibleModal={setIsModalHelp}>
        <HelpContent />
      </Modal>
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

interface HomeStyleProps {
  view?: boolean;
}

const Container = styled.div`
  max-width: 1350px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div<HomeStyleProps>`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: ${({ view }) => (view ? "10px" : "20px")};
  margin: 40px 30px;
`;

const UserControl = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Center = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2``;

export default Home;
