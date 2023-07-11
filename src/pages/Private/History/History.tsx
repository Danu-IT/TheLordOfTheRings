import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { searchValue } from "../../../utils";
import {
  changeHistory,
  clearAllHistory,
  removeItemHistory,
} from "../../../store/slices/speciesSlice";
import { getAllCardItems } from "../../../firebase/change";
import {
  Container,
  ContainerPage,
  Head,
  LinkCustom,
  ListHistory,
  Remove,
  Title,
} from "./style";

const History = () => {
  const history = useAppSelector((state) => state.speciesSlice.history);
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllCardItems("history", user.uid).then((history) => {
      history && dispatch(changeHistory(history.docs || []));
    });
  }, [user]);

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
          <Remove onClick={() => dispatch(clearAllHistory())}>
            Очистить все
          </Remove>
        </Head>
        {history &&
          history.map((el, i) => (
            <Container key={el}>
              <LinkCustom to={el}>{searchValue(el)}</LinkCustom>
              <Remove onClick={() => dispatch(removeItemHistory(i))}>
                Очистить
              </Remove>
            </Container>
          ))}
      </ListHistory>
    </ContainerPage>
  );
};

export default History;
