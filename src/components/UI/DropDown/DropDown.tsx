import { ComponentType } from "react";
import { Container } from "./style";

interface DropDownProps {
  Content: ComponentType;
}

function DropDown({ Content }: DropDownProps) {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default DropDown;
