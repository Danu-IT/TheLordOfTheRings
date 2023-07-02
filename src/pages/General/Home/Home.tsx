import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../../hooks/redux";
import { changeUser } from "../../../store/slices/auth";
import { auth } from "../../../firebase";
import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = ringsAPI.useGetCharactersQuery(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
    });
  }, []);

  return (
    <Container>
      <Cards>
        {data?.docs &&
          data.docs.map((el) => (
            <Card
              onClick={(id: string) => navigate(`/${id}`)}
              key={el.id}
              item={el}
            />
          ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  margin: 40px 30px;
`;

export default Home;
