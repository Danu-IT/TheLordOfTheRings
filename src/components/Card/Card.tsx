import { Dispatch, FC, SetStateAction } from "react";

import Button from "../UI/Button/Button";
import Like from "../Like";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleLike } from "../../store/slices/speciesSlice";
import { stringExists } from "../../utils";
import { useAppContext } from "../../hooks/useAppContext";
import { Block, ButtonCard, Container, Info } from "./style";

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
  const { user, isAuth } = useAppSelector((state) => state.auth);

  const handlerCard = () => {
    if (user.uid) onClick(item.id);
    else setIsModalHelp && setIsModalHelp(true);
  };

  return (
    <Container view={regularСardType}>
      {isAuth && (
        <Like
          onClick={() => dispatch(toggleLike(item))}
          isLike={item.like}
        />
      )}
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
          variant="white"
          color="black">
          Открыть
        </Button>
      </ButtonCard>
    </Container>
  );
};

export default Card;
