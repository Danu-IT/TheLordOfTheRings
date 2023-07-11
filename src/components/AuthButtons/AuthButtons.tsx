import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import { Container } from "./style";

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        onClick={() => navigate("/register")}
        color="white"
        variant="#e5c522">
        Регистрация
      </Button>
      <Button
        onClick={() => navigate("/login")}
        color="black"
        variant="white">
        Авторизация
      </Button>
    </Container>
  );
};

export default AuthButtons;
