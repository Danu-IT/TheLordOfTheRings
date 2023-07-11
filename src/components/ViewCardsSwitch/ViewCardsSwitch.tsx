import { BsViewStacked } from "react-icons/bs";
import { TfiViewGrid } from "react-icons/tfi";
import { useEffect } from "react";

import { useAppContext } from "../../hooks/useAppContext";
import { Container } from "./style";

const ViewCardsSwitch = () => {
  const { regularСardType, setRegularСardType } = useAppContext();

  useEffect(() => () => setRegularСardType(true), []);

  return (
    <Container>
      <BsViewStacked
        color={regularСardType ? "white" : "yellow"}
        onClick={() => setRegularСardType(false)}
        size={25}
      />
      <TfiViewGrid
        color={regularСardType ? "yellow" : "white"}
        onClick={() => setRegularСardType(true)}
        size={25}></TfiViewGrid>
    </Container>
  );
};

export default ViewCardsSwitch;
