import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Cards } from "../../General/Home/Home";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();

  const { favorites } = useAppSelector((state) => state.speciesSlice);

  return (
    <Container>
      <Title>Избранное</Title>
      <Cards>
        {favorites &&
          favorites.map((el) => (
            <Card
              item={el}
              onClick={(id: string) => navigate(`/${id}`)}
              key={el.id}></Card>
          ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1350px;
  padding: 0 10px;
  margin: 10px auto;
`;

const Title = styled.h1``;

export default Favorite;
