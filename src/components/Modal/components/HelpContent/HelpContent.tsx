import AuthButtons from "../../../AuthButtons/AuthButtons";
import { Container, Title } from "./style";

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

export default HelpContent;
