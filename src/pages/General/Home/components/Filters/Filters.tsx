import { useSearchParams } from "react-router-dom";
import Filter from "../../../../../components/Filter";
import { useAppDispatch } from "../../../../../hooks/redux";
import { changeFilterRace } from "../../../../../store/slices/dataFilter";
import { arrayRace } from "../../../../../utils/data";
import { useState, useEffect } from "react";

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
  }, [optionsRaceState, setOptionsRaceState]);

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
