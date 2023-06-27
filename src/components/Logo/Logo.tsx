import { styled } from "styled-components";
import LogoPng from "../../assets/logo.png";

const Logo = () => {
  return (
    <Container>
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
