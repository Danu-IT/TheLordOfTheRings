import { styled } from "styled-components";
import { ringsAPI } from "../../../../services/RingsService";
import { useNavigate } from "react-router-dom";

const Sagests = () => {
  const navigate = useNavigate();
  const { data: sagests } = ringsAPI.useGetCharacterSpecificQuery();

  return (
    <Container>
      <Content>
        <Title>Возможно вы ищите это:</Title>
        <ListSagest>
          {sagests?.docs &&
            sagests.docs.map((el) => (
              <Sagest
                onClick={(e: any) => {
                  e.stopPropagation();
                  navigate(`/${el.id}`);
                }}>
                {el.name}
              </Sagest>
            ))}
        </ListSagest>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 15px solid white;
  border-radius: 10px;
  position: absolute;
  top: -10px;
  left: -15px;
  width: 105%;
  height: 200px;
  z-index: 2;
  color: black;
`;

const Title = styled.h2``;
const ListSagest = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 15px;
`;

const Content = styled.div`
  background-color: white;
  margin-top: 40px;
  height: 160px;
`;

const Sagest = styled.span`
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  &:hover {
    opacity: 0.5;
  }
`;

export default Sagests;
