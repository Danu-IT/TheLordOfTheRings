import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

const Back = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <BiArrowBack size={25} />
    </Container>
  );
};

export default Back;
