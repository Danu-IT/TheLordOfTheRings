import { FC, MouseEventHandler } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
import Like from "../Like";

interface CardProps {
  item: CharacterCustomElement;
  handleCard: (id: string) => void;
}

const Card: FC<CardProps> = ({ item, handleCard }) => {
  return (
    <Container>
      <Like />
      <Info>
        <Block>
          Имя: <span>{item.name}</span>
        </Block>
        <Block>
          Раса: <span>{item.race}</span>
        </Block>
        <Block>
          Пол: <span>{item.gender ? item.gender : "Неизвестно"}</span>
        </Block>
        <Block>
          Рождение: <span>{item.gender ? item.birth : "Неизвестно"}</span>
        </Block>
      </Info>
      <ButtonCard>
        <Button
          onClick={() => handleCard(item.id)}
          bg="white"
          color="black">
          Открыть
        </Button>
      </ButtonCard>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0px 10px 15px 0px #000000;
  border-radius: 10px;
  border: 1px solid white;
  width: 250px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  overflow: auto;
  position: relative;
`;

const Block = styled.div`
  & > span {
    color: white;
    font-weight: bold;
    font-style: italic;
  }
`;
const Info = styled.div``;
const Race = styled.div``;

const ButtonCard = styled.div`
  align-self: center;
`;
const Gender = styled.div``;
const Hair = styled.div``;

export default Card;
