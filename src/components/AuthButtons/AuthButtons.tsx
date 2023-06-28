import Button from "../UI/Button";

import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const AuthButtons = () => {
  const navigate = useNavigate();
  const handlerRegistration = () => {
    navigate("/register");
  };
  return (
    <Container>
      <Button
        onClick={handlerRegistration}
        color="white"
        bg="#e5c522">
        Регистрация
      </Button>
      <Button
        onClick={() => navigate("/login")}
        color="black"
        bg="white">
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
