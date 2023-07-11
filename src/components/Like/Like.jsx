import { AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";

import { Container } from "./style";

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

export default Like;
