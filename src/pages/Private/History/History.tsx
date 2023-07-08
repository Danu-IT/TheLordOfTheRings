import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { styled } from "styled-components";
import { searchValue } from "../../../utils";
import {
  clearAllHistory,
  removeItemHistory,
} from "../../../store/slices/speciesSlice";
import { saveItem } from "../../../firebase/change";

const History = () => {
  const { history } = useAppSelector((state) => state.speciesSlice);
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCleatAllHistory = () => {
    dispatch(clearAllHistory());
    saveItem([], user.uid, "history");
  };

  if (!history.length) {
    return (
      <ContainerPage>
        <Title>
          У вас в данный момент отсутвует история поисковых запросов
        </Title>
      </ContainerPage>
    );
  }

  return (
    <ContainerPage>
      <Title>В данном разделе хранится информация о поисковых запросах</Title>
      <ListHistory>
        <Head>
          <div>История по запросам</div>
          <Remove onClick={handleCleatAllHistory}>Очистить все</Remove>
        </Head>
        {history.map((el, i) => (
          <Container>
            <div>
              <span onClick={() => navigate(el)}> {searchValue(el)}</span>
            </div>
            <Remove onClick={() => dispatch(removeItemHistory(i))}>
              Очистить
            </Remove>
          </Container>
        ))}
      </ListHistory>
    </ContainerPage>
  );
};

const ContainerPage = styled.div`
  max-width: 1350px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;
const ListHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  width: 60%;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  & > div > span {
    font-style: italic;
    color: yellow;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Remove = styled.div`
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export default History;
