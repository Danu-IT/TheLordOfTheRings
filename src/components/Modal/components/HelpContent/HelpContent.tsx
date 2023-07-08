import { styled } from "styled-components";
import AuthButtons from "../../../AuthButtons/AuthButtons";

const HelpContent = ({}) => {
  return (
    <Container>
      <Title>
        Для активации всех возможностей нужно <br /> войти в аккаунт !!!
      </Title>
      <AuthButtons></AuthButtons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h3`
  text-align: center;
`;

export default HelpContent;
