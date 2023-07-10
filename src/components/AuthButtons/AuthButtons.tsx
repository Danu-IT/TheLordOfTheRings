import Button from "../UI/Button";

import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default AuthButtons;
