import { PiSmileySadBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { Container, Link, Text } from "./style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Link onClick={() => navigate("/")}>Перейти на главную</Link>
      <PiSmileySadBold size={300} />
      <Text>Страница не найдена</Text>
    </Container>
  );
};

export default NotFound;
