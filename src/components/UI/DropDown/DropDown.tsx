import { styled } from "styled-components";

interface DropDownProps<T> {
  Content: any;
}

function DropDown<T>({ Content }: DropDownProps<T>) {
  return (
    <Container>
      <Content />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 61px;
  left: 265px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: black;
  border-radius: 0 0 10px 10px;
`;

export default DropDown;
