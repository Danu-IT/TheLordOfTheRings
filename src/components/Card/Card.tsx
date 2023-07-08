import { Dispatch, FC, SetStateAction } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
import Like from "../Like";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleLike } from "../../store/slices/speciesSlice";
import { stringExists } from "../../utils";
import { useAppContext } from "../../hooks/useAppContext";

interface CardProps {
  item: CharacterCustomElement;
  onClick: (id: string) => void;
  setIsModalHelp?: Dispatch<SetStateAction<boolean>>;
  isModalHelp?: boolean;
}

const Card: FC<CardProps> = ({
  item,
  onClick,
  setIsModalHelp,
  isModalHelp,
}) => {
  const { regularСardType } = useAppContext();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handlerCard = () => {
    if (user.uid) onClick(item.id);
    else setIsModalHelp && setIsModalHelp(true);
  };

  return (
    <Container view={regularСardType}>
      <Like
        onClick={() => dispatch(toggleLike(item))}
        isLike={item.like}
      />
      <Info>
        <Block>
          Имя: <span>{stringExists(item.name)}</span>
        </Block>
        <Block>
          Раса: <span>{stringExists(item.race)}</span>
        </Block>
        <Block>
          Пол: <span>{stringExists(item.gender)}</span>
        </Block>
        <Block>
          Рождение: <span>{stringExists(item.birth)}</span>
        </Block>
      </Info>
      <ButtonCard isModalHelp={isModalHelp}>
        <Button
          onClick={handlerCard}
          bg="white"
          color="black">
          Открыть
        </Button>
      </ButtonCard>
    </Container>
  );
};

interface CardStyleProps {
  isModalHelp?: boolean | undefined;
  view?: boolean;
}

const Container = styled.div<CardStyleProps>`
  box-shadow: 0px 10px 15px 0px #000000;
  border-radius: 10px;
  border: 1px solid white;
  width: ${({ view }) => (view ? "250px" : "500px")};
  padding: 25px 5px 5px 5px;
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

const ButtonCard = styled.div<CardStyleProps>`
  align-self: center;
  position: relative;
  z-index: ${({ isModalHelp }) => (isModalHelp ? "-2" : "")};
`;

export default Card;
