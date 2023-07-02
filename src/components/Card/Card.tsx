import { FC } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
import Like from "../Like";

interface CardProps {
  item: CharacterCustomElement;
  onClick: (id: string) => void;
}

const Card: FC<CardProps> = ({ item, onClick }) => {
  const isExists = (item: string) => (item ? item : "Неизвестно");

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
          Пол: <span>{isExists(item.gender)}</span>
        </Block>
        <Block>
          Рождение: <span>{isExists(item.birth)}</span>
        </Block>
      </Info>
      <ButtonCard>
        <Button
          onClick={() => onClick(item.id)}
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

const ButtonCard = styled.div`
  align-self: center;
`;

export default Card;
