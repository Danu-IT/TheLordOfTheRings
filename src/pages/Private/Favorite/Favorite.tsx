import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux";
import { Cards } from "../../General/Home/style";
import Card from "../../../components/Card/Card";
import { ContainerPage } from "../../../styles/layout";
import { Title } from "./style";

const Favorite = () => {
  const navigate = useNavigate();

  const favorites = useAppSelector((state) => state.speciesSlice.favorites);
  return (
    <ContainerPage>
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
    </ContainerPage>
  );
};

export default Favorite;
