import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";

import Button from "../UI/Button/Button";
import Like from "../Like";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleLike } from "../../store/slices/speciesSlice";
import { stringExists } from "../../utils";
import { useAppContext } from "../../hooks/useAppContext";
import { Block, ButtonCard, Container, Info, Share } from "./style";
import { Link } from "react-router-dom";
import { BiLogoTelegram } from "react-icons/bi";
import { CharacterCustomElement } from "../../type/character";

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
  const { regularСardType, isFeatureFlag } = useAppContext();

  const dispatch = useAppDispatch();
  const { user, isAuth } = useAppSelector((state) => state.auth);

  const handlerCard = () => {
    if (user.uid) onClick(item.id);
    else setIsModalHelp && setIsModalHelp(true);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }}>
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
        {isFeatureFlag && (
          <Share>
            <Link to={`https://t.me/share/url?url=${item.wikiUrl}))`}>
              <BiLogoTelegram color="#0088cc" />
            </Link>
          </Share>
        )}
      </Container>
    </motion.div>
  );
};

export default Card;
