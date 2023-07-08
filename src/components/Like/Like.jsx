import { AiFillHeart } from "react-icons/ai";
import { styled } from "styled-components";
import PropTypes from "prop-types";

const Like = ({ isLike, onClick }) => {
  return (
    <Container onClick={onClick}>
      <AiFillHeart
        color={isLike ? "red" : "white"}
        size={30}
      />
    </Container>
  );
};

Like.propTypes = {
  isLike: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
`;

export default Like;
