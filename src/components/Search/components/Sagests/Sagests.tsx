import { useNavigate } from "react-router-dom";

import { ringsAPI } from "../../../../store/services/RingsService";
import { Container, Content, ListSagest, Sagest, Title } from "./style";
import { MouseEvent } from "react";

const Sagests = () => {
  const navigate = useNavigate();
  const { data: sagests } = ringsAPI.useGetCharacterSpecificQuery();

  const handleSagest = (e: MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    navigate(`/${id}`);
  };

  return (
    <Container>
      <Content>
        <Title>Возможно вы ищите это:</Title>
        <ListSagest>
          {sagests?.docs &&
            sagests.docs.map((el) => (
              <Sagest
                onClick={(e: MouseEvent<HTMLDivElement>) =>
                  handleSagest(e, el.id)
                }>
                {el.name}
              </Sagest>
            ))}
        </ListSagest>
      </Content>
    </Container>
  );
};

export default Sagests;
