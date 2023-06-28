import LogoPng from "../../assets/logo.png";

import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <Container onClick={handleClick}>
      <div>Ring Info</div>
      <LogoPic src={LogoPng}></LogoPic>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const LogoPic = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export default Logo;
