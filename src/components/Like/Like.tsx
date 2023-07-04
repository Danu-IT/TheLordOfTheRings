import { AiFillHeart } from "react-icons/ai";
import { styled } from "styled-components";

interface LikeProps {
  isLike: boolean;
}

const Like = ({ isLike }: LikeProps) => {
  return (
    <Container>
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
`;

export default Like;
