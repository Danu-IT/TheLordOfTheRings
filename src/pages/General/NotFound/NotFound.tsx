import { PiSmileySadBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Text = styled.div`
  font-size: 50px;
`;

const Link = styled.div`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export default NotFound;
