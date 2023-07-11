import { useNavigate } from "react-router-dom";

import LogoPng from "../../assets/logo.png";
import { Container, LogoPic } from "./style";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <Container onClick={handleClick}>
      <div>Ring Info</div>
      <LogoPic src={LogoPng} />
    </Container>
  );
};

export default Logo;
