import { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { ringsAPI } from "../../../store/services/RingsService";
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
import { Cards, Center, ContainerCustom, Title, UserControl } from "./style";

const Home = () => {
  const [searchParams] = useSearchParams();

  const pageQuery = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const sortQuery = searchParams.get("sort") || "asc";

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
    <ContainerCustom>
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
    </ContainerCustom>
  );
};

export default Home;
