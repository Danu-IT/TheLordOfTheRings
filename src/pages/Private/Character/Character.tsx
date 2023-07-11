import { useParams } from "react-router-dom";

import { ringsAPI } from "../../../store/services/RingsService";
import Back from "../../../components/Back";
import Quotes from "./components/Quotes";
import {
  Container,
  Content,
  Info,
  Left,
  Name,
  Param,
  ParamTitle,
  Right,
  Title,
} from "./style";

const Character = () => {
  const idCharacter = useParams().id || "";

  const { data } = ringsAPI.useGetCharacterQuery(idCharacter);
  const { data: dataQuote } = ringsAPI.useGetCharacterQuotQuery(idCharacter);

  const character = data?.docs[0];
  const characterQuote = dataQuote?.docs.slice(0, 30);

  return (
    <Container>
      <Back />
      <Content>
        <Left>
          {character?.name && <Name>{character.name}</Name>}
          {characterQuote && <Quotes list={characterQuote} />}
        </Left>
        <Right>
          <Title>Biographical information</Title>
          <Param>
            <ParamTitle>birth</ParamTitle>
            <Info>{character?.birth}</Info>
          </Param>
          <Param>
            <ParamTitle>death</ParamTitle>
            <Info>{character?.death}</Info>
          </Param>
          <Param>
            <ParamTitle>realm</ParamTitle>
            <Info>{character?.realm}</Info>
          </Param>
          <Title>Physical description</Title>
          <Param>
            <ParamTitle>hair</ParamTitle>
            <Info>{character?.hair}</Info>
          </Param>
          <Param>
            <ParamTitle>spouse</ParamTitle>
            <Info>{character?.spouse}</Info>
          </Param>
          <Param>
            <ParamTitle>race</ParamTitle>
            <Info>{character?.race}</Info>
          </Param>
          <Param>
            <ParamTitle>gender</ParamTitle>
            <Info>{character?.gender}</Info>
          </Param>
        </Right>
      </Content>
    </Container>
  );
};

export default Character;
