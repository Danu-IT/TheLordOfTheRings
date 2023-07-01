import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Back = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <BiArrowBack size={25} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Back;
