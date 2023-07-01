import { AiOutlineHeart } from "react-icons/ai";
import { styled } from "styled-components";

const Like = ({}) => {
  return (
    <Container>
      <AiOutlineHeart size={30} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 5px;
`;

export default Like;
