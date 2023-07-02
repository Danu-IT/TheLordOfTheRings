import { useLocation, useParams } from "react-router-dom";
import { ringsAPI } from "../../../services/RingsService";
import Back from "../../../components/Back";
import { styled } from "styled-components";
import { useMemo } from "react";
import Quotes from "./components/Quotes";

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

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0 10px;
  margin: 0 auto;
`;
const Content = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 20px;
`;
const Name = styled.div`
  font-size: 50px;
  text-align: center;
`;
const Left = styled.div`
  width: 70%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
`;
const Title = styled.h3`
  text-decoration: underline;
`;
const Param = styled.div`
  display: flex;
  gap: 20px;
`;

const ParamTitle = styled.div`
  font-weight: bold;
  width: 70px;
`;
const Info = styled.div`
  align-self: center;
`;

export default Character;
