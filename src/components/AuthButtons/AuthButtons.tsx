import Button from "../UI/Button";

import { styled } from "styled-components";

const AuthButtons = () => {
  return (
    <Container>
      <Button
        color="white"
        bg="#e5c522">
        Регистрация
      </Button>
      <Button
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
