import { AiFillHeart } from "react-icons/ai";
import { styled } from "styled-components";

interface LikeProps {
  isLike: boolean;
  onClick: () => void;
}

const Like = ({ isLike, onClick }: LikeProps) => {
  return (
    <Container onClick={onClick}>
      <AiFillHeart
        color={isLike ? "red" : "white"}
        size={30}
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
`;

export default Like;
