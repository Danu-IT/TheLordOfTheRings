import { BsViewStacked } from "react-icons/bs";
import { TfiViewGrid } from "react-icons/tfi";
import { styled } from "styled-components";
import { useAppContext } from "../../hooks/useAppContext";

const ViewCardsSwitch = () => {
  const { regularСardType, setRegularСardType } = useAppContext();

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

const Container = styled.div`
  align-self: end;
  display: flex;
  gap: 15px;
  margin-right: 70px;
  & > * {
    cursor: pointer;
  }
`;

export default ViewCardsSwitch;
