import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Filter from "../../../../../components/Filter";
import { useAppDispatch } from "../../../../../hooks/redux";
import { changeFilterRace } from "../../../../../store/slices/speciesSlice";
import { arrayRace } from "../../../../../utils/data";

const Filters = () => {
  const [searchParams] = useSearchParams();
  const filterRaceQuery = searchParams.get("race") || "";

  const [optionsRaceState, setOptionsRaceState] = useState(arrayRace);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateArray = optionsRaceState.map((el) => {
      if (filterRaceQuery.indexOf(el.value) !== -1) {
        el.active = true;
        return el;
      }
      el.active = false;
      return el;
    });
    setOptionsRaceState(updateArray);
  }, []);

  useEffect(() => {
    let strFilter = "";

    optionsRaceState.forEach((el) => {
      if (el.active) strFilter += el.value + ",";
    });

    dispatch(changeFilterRace(strFilter.substring(0, strFilter.length - 1)));
  }, [optionsRaceState, setOptionsRaceState, filterRaceQuery]);

  return (
    <div>
      <Filter
        title="Раса"
        options={optionsRaceState}
        setOptions={setOptionsRaceState}></Filter>
    </div>
  );
};

export default Filters;
