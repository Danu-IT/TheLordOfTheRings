import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../../../hooks/redux";
import { changeUser } from "../../../store/slices/auth";
import { auth } from "../../../firebase";
import { ringsAPI } from "../../../services/RingsService";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";

const Home = () => {
  const [searchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "1";

  const [pageState, setPageState] = useState(Number(pageQuery));

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = ringsAPI.useGetCharactersQuery({ page: pageState });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
    });
  }, []);

  useEffect(() => {
    navigate(`?page=${pageState}`);
  }, [pageState, setPageState]);

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
         ))
      }
      </Cards>
      <Pagination
        setPageState={setPageState}
        pageState={pageState}
        info={data}></Pagination>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1300px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  margin: 40px 30px;
`;

export default Home;
